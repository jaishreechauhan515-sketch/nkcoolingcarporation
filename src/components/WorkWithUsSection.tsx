import React, { useState } from 'react';
import { COMPANY_DETAILS, MOCK_IMAGES } from '../data/mockData';
import { TechnicianApplicationData } from '../types';
import { UserCheck, MessageSquare, Briefcase, Phone, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import { createTechnicianApplication } from '../services/firebaseDb';

export const WorkWithUsSection: React.FC = () => {
  const [formData, setFormData] = useState<TechnicianApplicationData>({
    fullName: '',
    mobileNumber: '',
    currentLocation: '',
    technicalSkills: '',
    experienceYears: '2-5 Years',
    appliancesServiced: ['AC', 'Washing Machine'],
    preferredServiceArea: 'Bhatpar Rani & Nearby',
    introduction: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const applianceOptions = ['AC', 'RO', 'Cooler', 'Freezer', 'Washing Machine', 'Other Appliances'];

  const toggleAppliance = (app: string) => {
    setFormData(prev => {
      const exists = prev.appliancesServiced.includes(app);
      if (exists) {
        return { ...prev, appliancesServiced: prev.appliancesServiced.filter(a => a !== app) };
      } else {
        return { ...prev, appliancesServiced: [...prev.appliancesServiced, app] };
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = 'Mobile Number is required';
    if (!formData.currentLocation.trim()) newErrors.currentLocation = 'Location is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppUrl = (refId?: string) => {
    const refText = refId ? `*Application Ref:* #${refId}\n` : '';
    const text = `Hello NK Cooling Corporation Team,\n\nI want to apply as a skilled technician.\n\n${refText}*Full Name:* ${formData.fullName}\n*Mobile:* ${formData.mobileNumber}\n*Current Location:* ${formData.currentLocation}\n*Experience:* ${formData.experienceYears}\n*Technical Skills:* ${formData.technicalSkills || 'General Appliance Servicing'}\n*Appliances I Can Service:* ${formData.appliancesServiced.join(', ')}\n*Preferred Area:* ${formData.preferredServiceArea}\n*Introduction:* ${formData.introduction || 'N/A'}\n\nPlease review my application for technician recruitment.`;

    return `https://wa.me/91${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || isSaving) return;

    setIsSaving(true);
    let createdId = '';
    try {
      createdId = await createTechnicianApplication({
        fullName: formData.fullName,
        phone: formData.mobileNumber,
        experienceYears: formData.experienceYears,
        skills: `${formData.appliancesServiced.join(', ')}${formData.technicalSkills ? ` | ${formData.technicalSkills}` : ''}`,
        preferredArea: `${formData.preferredServiceArea} (${formData.currentLocation})`,
        message: formData.introduction
      });
    } catch (err) {
      console.warn('Firestore technician application error (proceeding to WhatsApp):', err);
    } finally {
      setIsSaving(false);
      setSubmitted(true);
      const waUrl = generateWhatsAppUrl(createdId);
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 500);
    }
  };

  return (
    <section className="py-16 bg-zinc-50 text-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[10px] font-black rounded-full uppercase tracking-[0.2em]">
            JOIN OUR TECHNICIAN TEAM
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Work With NK Cooling Corporation
          </h2>
          <h3 className="font-heading font-extrabold text-xl text-indigo-600">
            Are You a Skilled Technician?
          </h3>
          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed font-medium">
            If you have relevant technical skills in AC, Washing Machine, RO, Refrigerator or Cooler repair and are interested in working with NK Cooling Corporation, share your details with us. Your details will be reviewed by our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual Photos */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-[2.5rem] overflow-hidden border border-zinc-100 shadow-sm relative group">
              <img
                src={MOCK_IMAGES.heroTechnician}
                alt="Skilled Technician at Work"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="space-y-1">
                  <span className="text-xs font-black text-indigo-300 uppercase tracking-wider block">
                    Join Local Service Network
                  </span>
                  <p className="text-xs text-white font-medium">
                    Collaborate with an established appliance repair company in Deoria district.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-5 rounded-2xl bg-white border border-zinc-100 text-center space-y-1 shadow-sm">
                <Briefcase className="w-5 h-5 text-indigo-600 mx-auto" />
                <span className="text-xs font-extrabold text-zinc-900 block">Field Opportunity</span>
                <span className="text-[11px] text-zinc-500 font-medium">Steady Local Service Calls</span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-zinc-100 text-center space-y-1 shadow-sm">
                <UserCheck className="w-5 h-5 text-emerald-600 mx-auto" />
                <span className="text-xs font-extrabold text-zinc-900 block">Skilled Craftsmen</span>
                <span className="text-[11px] text-zinc-500 font-medium">Fair Technical Compensation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Recruitment Form */}
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] border border-zinc-100 p-6 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-heading font-extrabold text-2xl text-zinc-900">
                  Application Prepared!
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 font-medium max-w-md mx-auto">
                  Your details will be reviewed by our team. Click below to submit your profile directly via WhatsApp.
                </p>
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-2xl bg-emerald-600 text-white font-extrabold text-sm shadow-md hover:bg-emerald-500"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>APPLY VIA WHATSAPP NOW</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-zinc-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 rounded-2xl bg-zinc-50 border ${errors.fullName ? 'border-red-500' : 'border-zinc-200'} text-zinc-900 text-sm focus:outline-none focus:border-indigo-600 font-medium`}
                    />
                    {errors.fullName && <p className="text-[11px] text-red-500 mt-0.5">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-zinc-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      className={`w-full px-4 py-3 rounded-2xl bg-zinc-50 border ${errors.mobileNumber ? 'border-red-500' : 'border-zinc-200'} text-zinc-900 text-sm focus:outline-none focus:border-indigo-600 font-medium`}
                    />
                    {errors.mobileNumber && <p className="text-[11px] text-red-500 mt-0.5">{errors.mobileNumber}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-zinc-700 mb-1">
                      Current Location / Village *
                    </label>
                    <input
                      type="text"
                      name="currentLocation"
                      value={formData.currentLocation}
                      onChange={handleChange}
                      placeholder="e.g. Bhatpar Rani, Salempur"
                      className={`w-full px-4 py-3 rounded-2xl bg-zinc-50 border ${errors.currentLocation ? 'border-red-500' : 'border-zinc-200'} text-zinc-900 text-sm focus:outline-none focus:border-indigo-600 font-medium`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-zinc-700 mb-1">
                      Field Experience
                    </label>
                    <select
                      name="experienceYears"
                      value={formData.experienceYears}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-indigo-600 font-medium"
                    >
                      <option value="1-2 Years">1 - 2 Years</option>
                      <option value="2-5 Years">2 - 5 Years</option>
                      <option value="5+ Years">5+ Years Experience</option>
                      <option value="Fresher Helper">Fresher / Helper Trainee</option>
                    </select>
                  </div>

                </div>

                {/* Appliances Checkboxes */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-zinc-700 mb-2">
                    Appliances You Can Service:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {applianceOptions.map((app) => {
                      const checked = formData.appliancesServiced.includes(app);
                      return (
                        <button
                          key={app}
                          type="button"
                          onClick={() => toggleAppliance(app)}
                          className={`px-3 py-2.5 rounded-2xl text-xs font-bold border transition text-left flex items-center space-x-1.5 ${
                            checked
                              ? 'bg-indigo-50 text-indigo-600 border-indigo-200'
                              : 'bg-zinc-50 text-zinc-600 border-zinc-200 hover:border-zinc-300'
                          }`}
                        >
                          <span className={`w-4 h-4 rounded-md border flex items-center justify-center text-[10px] ${checked ? 'bg-indigo-600 text-white border-indigo-600 font-extrabold' : 'border-zinc-300'}`}>
                            {checked ? '✓' : ''}
                          </span>
                          <span>{app}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-zinc-700 mb-1">
                    Technical Skills & Qualifications
                  </label>
                  <input
                    type="text"
                    name="technicalSkills"
                    value={formData.technicalSkills}
                    onChange={handleChange}
                    placeholder="e.g. Gas charging, PCB repair, Motor winding, ITI Diploma"
                    className="w-full px-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-indigo-600 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-zinc-700 mb-1">
                    Short Introduction
                  </label>
                  <textarea
                    name="introduction"
                    rows={3}
                    value={formData.introduction}
                    onChange={handleChange}
                    placeholder="Tell us briefly about your past work..."
                    className="w-full p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-indigo-600 font-medium"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSaving}
                  className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-75 text-white font-extrabold text-base shadow-md shadow-indigo-100 flex items-center justify-center space-x-2"
                >
                  {isSaving ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>SAVING & REDIRECTING...</span>
                    </>
                  ) : (
                    <>
                      <MessageSquare className="w-5 h-5" />
                      <span>APPLY VIA WHATSAPP NOW</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-zinc-400 text-center font-medium italic">
                  Your details will be reviewed by our team upon submission.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
