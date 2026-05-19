import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight } from 'react-icons/fi';

function Field({ name, type = 'text', label, value, onChange, error, as = 'input', options = [] }) {
  const filled = !!value;
  return (
    <div className={`field ${error ? 'error' : ''} ${filled && as === 'select' ? 'filled' : ''}`}>
      {as === 'textarea' ? (
        <textarea name={name} value={value} onChange={onChange} placeholder=" " />
      ) : as === 'select' ? (
        <select name={name} value={value} onChange={onChange}>
          <option value="" disabled hidden></option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      ) : (
        <input type={type} name={name} value={value} onChange={onChange} placeholder=" " />
      )}
      <label>{label}</label>
      {error && (
        <span className="absolute -bottom-5 left-0 text-[10px] uppercase tracking-eyebrow font-bold text-red-400">
          {error}
        </span>
      )}
    </div>
  );
}

function ContactForm() {
  const formRef = useRef();
  const [data, setData] = useState({
    name: '', email: '', phone: '', serviceType: '', message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ submitting: false, sent: false, error: false, message: '' });

  const validate = () => {
    const e = {};
    if (!data.name.trim()) e.name = 'Required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Invalid email';
    if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(data.phone)) e.phone = 'Invalid number';
    if (!data.serviceType) e.serviceType = 'Choose one';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (ev) => {
    const { name, value } = ev.target;
    setData((d) => ({ ...d, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus({ submitting: true, sent: false, error: false, message: 'Sending…' });
    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current
      );
      if (result.text === 'OK') {
        setStatus({ submitting: false, sent: true, error: false, message: 'Thank you. We will contact you within 24 hours.' });
        setData({ name: '', email: '', phone: '', serviceType: '', message: '' });
      }
    } catch (err) {
      setStatus({ submitting: false, sent: false, error: true, message: 'Something went wrong. Please call (903) 320-3030.' });
    }
  };

  return (
    <section id="contact-form" className="relative py-24 md:py-32 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-eyebrow font-bold text-royal-400 mb-6">
              <span className="w-10 h-px bg-royal-500" />
              <span>06 / Get Started</span>
            </div>
            <h2 className="display-xxl text-5xl md:text-6xl lg:text-7xl text-white">
              Book your
              <br />
              <span className="text-royal-400">free inspection.</span>
            </h2>
            <div className="hairline my-8 max-w-sm ml-0" />
            <p className="text-white/75 leading-relaxed mb-10 max-w-md">
              Fill out the form below and we'll get back to you within 24 hours. Fast response, fair pricing, honest work.
            </p>

            <ul className="space-y-6">
              {[
                { icon: FiPhone, label: 'Call', value: '(903) 320-3030', href: 'tel:+19033203030' },
                { icon: FiMail, label: 'Email', value: 'info@bxcroofing.com', href: 'mailto:info@bxcroofing.com' },
                { icon: FiMapPin, label: 'Service Area', value: 'East Texas' },
                { icon: FiClock, label: 'Hours', value: 'Mon–Sat · 7am to 7pm' },
              ].map((item) => {
                const I = item.icon;
                const content = (
                  <div className="flex items-center gap-5">
                    <div className="w-11 h-11 bg-royal-600/15 border border-royal-500/30 flex items-center justify-center flex-shrink-0">
                      <I className="text-royal-400" size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-eyebrow font-bold text-white/55 mb-1">
                        {item.label}
                      </div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </div>
                );
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a href={item.href} className="block hover:text-royal-300 transition-colors">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="bg-charcoal-950 border border-white/10 p-8 md:p-12 relative">
              <span className="absolute -top-3 left-8 text-[10px] uppercase tracking-eyebrow font-bold text-white bg-royal-600 px-3 py-2">
                Free · No Obligation
              </span>

              <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-8 mt-2">
                <Field name="name" label="Your Name" value={data.name} onChange={onChange} error={errors.name} />
                <div className="grid md:grid-cols-2 gap-8">
                  <Field name="email" type="email" label="Email Address" value={data.email} onChange={onChange} error={errors.email} />
                  <Field name="phone" type="tel" label="Phone Number" value={data.phone} onChange={onChange} error={errors.phone} />
                </div>
                <Field
                  name="serviceType"
                  as="select"
                  label="Service Type"
                  value={data.serviceType}
                  onChange={onChange}
                  error={errors.serviceType}
                  options={[
                    { value: 'roof-replacement', label: 'Roof Replacement' },
                    { value: 'roof-repair', label: 'Roof Repair' },
                    { value: 'emergency', label: 'Emergency Service' },
                    { value: 'inspection', label: 'Free Inspection' },
                    { value: 'other', label: 'Other' },
                  ]}
                />
                <Field name="message" as="textarea" label="Additional details (optional)" value={data.message} onChange={onChange} />

                {status.message && (
                  <div
                    className={`text-xs uppercase tracking-eyebrow font-bold border-l-2 pl-4 py-2 ${
                      status.error
                        ? 'border-red-500 text-red-400'
                        : status.sent
                        ? 'border-royal-500 text-royal-300'
                        : 'border-white/30 text-white/70'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                  type="submit"
                  disabled={status.submitting}
                  className="group w-full bg-royal-600 hover:bg-royal-500 disabled:opacity-60 text-white py-5 text-[13px] uppercase tracking-eyebrow font-bold flex items-center justify-center gap-3 transition-colors shadow-[0_8px_30px_rgba(37,99,235,0.35)]"
                >
                  {status.submitting ? 'Sending…' : 'Get My Free Estimate'}
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
