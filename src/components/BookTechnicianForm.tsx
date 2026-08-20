import React, { useState, useEffect } from 'react';
import { COMPANY_DETAILS } from '../data/mockData';
import { BookingFormData } from '../types';
import { Wrench, MessageSquare, Phone, Calendar, Clock, MapPin, User, FileText, CheckCircle2, Loader2 } from 'lucide-react';

interface BookTechnicianFormProps {
  initialService?: string;
  initialArea?: string;
  isModal?: boolean;
  onCloseModal?: () => void;
}

export const BookTechnicianForm: React.FC<BookTechnicianFormProps> = ({
  initialService = 'AC',
  initialArea = 'Bhatpar Rani, Deoria',
  isModal = false,
  onCloseModal
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    mobileNumber: '',
    appliance: initialService.toLowerCase().includes('washing') ? 'Washing Machine' : initialService,
    serviceRequired: 'General Repair & Servicing',
    serviceArea: initialArea,
    preferredDate: new Date().toISOString().split('T')[0],
    preferredTime: 'Morning (9:00 AM - 12:00 PM)',
    problemDescription: ''
  });

  useEffect(() => {
    if (initialService) {
      if (initialService.toLowerCase().includes('ac')) setFormData(prev => ({ ...prev, appliance: 'AC' }));
      else if (initialService.toLowerCase().includes('ro')) setFormData(prev => ({ ...prev, appliance: 'RO' }));
      else if (initialService.toLowerCase().includes('cooler')) setFormData(prev => ({ ...prev, appliance: 'Cooler' }));
      else if (initialService.toLowerCase().includes('freezer') || initialService.toLowerCase().includes('fridge')) setFormData(prev => ({ ...prev, appliance: 'Freezer' }));
      else if (initialService.toLowerCase().includes('washing')) setFormData(prev => ({ ...prev, appliance: 'Washing Machine' }));
    }
  }, [initialService]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [bookingRefId, setBookingRefId] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = 'Mobile Number is required';
    else if (!/^[0-9]{10}$/.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppUrl = (refId?: string): string => {
    const refText = refId ? `*Booking Ref:* #${refId}\n` : '';
    const text = `Hello NK Cooling Corporation,\n\nI would like to book a technician.\n\n${refText}*Name:* ${formData.fullName}\n*Mobile:* ${formData.mobileNumber}\n*Appliance:* ${formData.appliance}\n*Service Required:* ${formData.serviceRequired}\n*Service Area:* ${formData.serviceArea}\n*Preferred Date:* ${formData.preferredDate}\n*Preferred Time:* ${formData.preferredTime}\n*Problem Description:* ${formData.problemDescription || 'Not specified'}\n\nPlease contact me regarding my service request.`;

    return `https://wa.me/91${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || isSaving) return;

    setIsSaving(true);
    let createdId = '';
    
    // Simulate minor delay
    await new Promise(resolve => setTimeout(resolve, 600));

    setIsSaving(false);
    setSubmitted(true);
    const waUrl = generateWhatsAppUrl(createdId);
    
    // Redirect to WhatsApp
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 500);
  };

  return (
    <div id="booking-form" className={`bg-white rounded-[2.5rem] border border-zinc-100 p-6 sm:p-10 shadow-sm relative overflow-hidden ${isModal ? 'max-w-2xl w-full mx-auto' : ''}`}>
      
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
        <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[10px] font-black rounded-full uppercase tracking-[0.2em] inline-flex items-center">
          <Wrench className="w-3.5 h-3.5 mr-1.5" />
          BOOK A TECHNICIAN
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-zinc-900">
          Fast Doorstep Technician Service
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 font-medium">
          Tell us what appliance needs service and our team can connect with you through WhatsApp.
        </p>
      </div>

      {submitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="font-heading font-extrabold text-2xl text-zinc-900">
            Booking Form Generated!
          </h3>
          <p className="text-sm text-zinc-500 font-medium max-w-md mx-auto">
            Your booking details have been prepared. Click below to confirm via WhatsApp with NK Cooling Corporation.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-md flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>OPEN WHATSAPP NOW</span>
            </a>
            {isModal && onCloseModal && (
              <button
                onClick={onCloseModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-zinc-100 text-zinc-700 font-bold text-sm hover:bg-zinc-200"
              >
                Close Form
              </button>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-zinc-700 mb-1">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Kumar"
                  className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-zinc-50 border ${errors.fullName ? 'border-red-500' : 'border-zinc-200'} text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:border-indigo-600 font-medium`}
                />
              </div>
              {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-zinc-700 mb-1">
                Mobile Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-zinc-50 border ${errors.mobileNumber ? 'border-red-500' : 'border-zinc-200'} text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:border-indigo-600 font-medium`}
                />
              </div>
              {errors.mobileNumber && <p className="text-[11px] text-red-500 mt-1">{errors.mobileNumber}</p>}
            </div>

            {/* Appliance Selector */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-zinc-700 mb-1">
                Appliance *
              </label>
              <select
                name="appliance"
                value={formData.appliance}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-indigo-600 font-medium"
              >
                <option value="AC">Air Conditioner (AC)</option>
                <option value="RO">RO Water Purifier</option>
                <option value="Cooler">Air Cooler</option>
                <option value="Freezer">Refrigerator / Freezer</option>
                <option value="Washing Machine">Washing Machine</option>
                <option value="Other Appliance">Other Electrical Appliance</option>
              </select>
            </div>

            {/* Service Area Selector */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-zinc-700 mb-1">
                Service Area *
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                <select
                  name="serviceArea"
                  value={formData.serviceArea}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-indigo-600 font-medium"
                >
                  <option value="Bhatpar Rani, Deoria">Bhatpar Rani, Deoria</option>
                  <option value="Salempur">Salempur</option>
                  <option value="Lar">Lar</option>
                  <option value="Bhatni">Bhatni</option>
                  <option value="Bihta & Nearby Areas">Bihta & Nearby Areas</option>
                </select>
              </div>
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-zinc-700 mb-1">
                Preferred Date
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-indigo-600 font-medium"
                />
              </div>
            </div>

            {/* Preferred Time Slot */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-zinc-700 mb-1">
                Preferred Time Slot
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-indigo-600 font-medium"
                >
                  <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                  <option value="Afternoon (12:00 PM - 3:00 PM)">Afternoon (12:00 PM - 3:00 PM)</option>
                  <option value="Evening (3:00 PM - 7:00 PM)">Evening (3:00 PM - 7:00 PM)</option>
                  <option value="Immediate Emergency Visit">Immediate Emergency Visit</option>
                </select>
              </div>
            </div>

          </div>

          {/* Service Required Detail */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-zinc-700 mb-1">
              Service Required
            </label>
            <input
              type="text"
              name="serviceRequired"
              value={formData.serviceRequired}
              onChange={handleChange}
              placeholder="e.g. Jet Pump Servicing, Gas Charging, Motor Replacement"
              className="w-full px-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:border-indigo-600 font-medium"
            />
          </div>

          {/* Problem Description */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-zinc-700 mb-1">
              Problem Description (Optional)
            </label>
            <textarea
              name="problemDescription"
              rows={3}
              value={formData.problemDescription}
              onChange={handleChange}
              placeholder="Describe what issue you are facing (e.g. AC blowing warm air, fridge not cooling, washer vibration)..."
              className="w-full p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:border-indigo-600 font-medium"
            />
          </div>

          {/* Submit Action Button */}
          <button
            type="submit"
            disabled={isSaving}
            className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-75 text-white font-extrabold text-base shadow-md shadow-indigo-100 transition duration-300 flex items-center justify-center space-x-2"
          >
            {isSaving ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>SAVING & CONNECTING...</span>
              </>
            ) : (
              <>
                <MessageSquare className="w-5 h-5" />
                <span>BOOK ON WHATSAPP NOW</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-zinc-400 text-center font-medium">
            Or call directly: <a href={`tel:+91${COMPANY_DETAILS.phone}`} className="text-indigo-600 font-bold underline">{COMPANY_DETAILS.phone}</a>
          </p>
        </form>
      )}

    </div>
  );
};
