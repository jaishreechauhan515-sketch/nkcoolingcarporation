# Security Specification: NK Cooling Corporation

## 1. Data Invariants & Authorization Logic
- **Catch-All Default Deny**: All unmatched collections and documents are denied by default.
- **Admin Privilege**: An admin is verified by document existence at `/databases/$(database)/documents/admins/$(request.auth.uid)` with email verification. The initial admin is bootstrapped for runtime user email `karishamanishad2@gmail.com`.
- **Bookings (`/bookings/{bookingId}`)**:
  - **Create**: Allowed for public (customers can submit service requests without forcing login) as long as payload satisfies `isValidBooking()` schema constraints: customerName, phone, serviceType, serviceArea, status initialized strictly to `"pending"`, and createdAt matches `request.time`.
  - **Read**: An authenticated user can read their own bookings (`resource.data.userId == request.auth.uid`), and verified admins can list/get all bookings.
  - **Update**: Only verified admins can update booking records (e.g. status transition to 'confirmed', 'in_progress', 'completed', 'cancelled') or a signed-in customer can cancel their own booking.
  - **Delete**: Restricted to verified Admins.
- **Technician Applications (`/technician_applications/{applicationId}`)**:
  - **Create**: Allowed for any technician applicant with valid fields (`isValidTechnicianApplication()`), status initialized to `"new"`, createdAt matches `request.time`.
  - **Read/List/Update/Delete**: Restricted to verified Admins.
- **Reviews (`/reviews/{reviewId}`)**:
  - **Read/List**: Public read for approved reviews (`resource.data.isApproved == true`), or Admins for all reviews.
  - **Create**: Public with `isApproved == false` by default, or Admin with valid schema.
  - **Update/Delete**: Restricted to verified Admins.
- **Admins (`/admins/{adminId}`)**:
  - **Read**: Authenticated user matching `request.auth.uid == adminId` or verified admin.
  - **Write**: Restricted to existing Admin or bootstrapping the verified owner email `karishamanishad2@gmail.com`.

## 2. The Dirty Dozen Payloads (Targeting Vulnerabilities)
1. **Ghost Field in Booking**: Injecting `isVIP: true` during customer booking. -> *Blocked by exact keys count and type schema.*
2. **Status Escalation on Create**: Submitting a booking directly with `status: "completed"`. -> *Blocked by create rule enforcing `incoming().status == 'pending'`.*
3. **Invalid Phone Injection**: Injecting 10KB binary or junk strings into `phone`. -> *Blocked by regex `^[0-9+ ]+$` and max length check.*
4. **Time Spoofing on Create**: Sending a fake `createdAt: "1999-01-01"`. -> *Blocked by `incoming().createdAt == request.time`.*
5. **Unauthorized Admin Elevation**: Writing a document to `/admins/attacker_uid` as a regular user. -> *Blocked by admin verification check.*
6. **Applicant Status Self-Approval**: Applicant attempting to update application status to `"reviewed"`. -> *Blocked: applicants cannot update applications, only Admins.*
7. **Review Auto-Approval Bypass**: Submitting a review with `isApproved: true` directly. -> *Blocked: non-admins must submit reviews with `isApproved: false`.*
8. **Malicious ID Path Poisoning**: Submitting a booking to an ID containing `../../etc/passwd` or 1KB long string. -> *Blocked by `isValidId(bookingId)`.*
9. **Unauthenticated PII Scraping**: Scraping all customer booking phone numbers and addresses with a blanket list query. -> *Blocked: list queries require admin or ownership evaluation on `resource.data`.*
10. **Customer Hijacking Booking of Another**: User A attempting to update or read User B's private address and phone. -> *Blocked by `resource.data.userId == request.auth.uid` and admin-only rules.*
11. **Review Tampering**: Regular user modifying review text or star rating after creation. -> *Blocked: regular users cannot update reviews once submitted.*
12. **Immutable Field Alteration**: Modifying `createdAt` during an admin update. -> *Blocked by `incoming().createdAt == existing().createdAt`.*
