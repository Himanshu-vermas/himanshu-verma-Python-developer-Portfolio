import React, { useState } from 'react';
import { socialLinks } from '../data/socialLinks';
import { submitToGoogleForm } from '../config/googleForm';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // { type: 'success' | 'error', message: '' }
  const [copiedField, setCopiedField] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please provide a subject.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please type your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await submitToGoogleForm(formData);
      setSubmitStatus({
        type: 'success',
        message: response.message || 'Thank you! Your message has been submitted successfully.'
      });
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setSubmitStatus({
        type: 'error',
        message: err.message || 'Failed to submit form. Please reach out directly via email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-5" aria-label="Contact Section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="bi bi-chat-heart-fill"></i>
            Get in Touch
          </span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle text-secondary">
            Have an open software developer role, internship opportunity, or project inquiry? I'd love to hear from you.
          </p>
        </div>

        <div className="row gy-5 align-items-stretch">
          
          {/* Left Column: Direct Recruiter Contact Cards */}
          <aside className="col-lg-5">
            <div className="glass-card p-4 p-md-5 h-100 d-flex flex-column justify-content-between">
              
              <div>
                {/* Status Callout */}
                <div className="d-flex align-items-center gap-3 p-3 rounded-4 mb-4" style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                  <span className="status-pulse"></span>
                  <div>
                    <div className="fw-bold text-white small">Available for Opportunities</div>
                    <div className="text-success small">Open for Full-Time Roles & Immediate Joining</div>
                  </div>
                </div>

                <h3 className="h4 fw-bold text-white mb-2">Direct Contact Channels</h3>
                <p className="text-secondary small mb-4">
                  Feel free to reach out directly via phone, email, or WhatsApp. I usually respond within a few hours.
                </p>

                {/* Contact Detail 1: Phone */}
                <div className="d-flex align-items-center justify-content-between p-3 rounded-3 mb-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)' }}>
                  <div className="d-flex align-items-center gap-3">
                    <div className="text-cyan fs-4">
                      <i className="bi bi-telephone-inbound-fill"></i>
                    </div>
                    <div>
                      <div className="text-muted small">Phone / Mobile</div>
                      <a href={`tel:${socialLinks.phone}`} className="text-white fw-semibold small">
                        {socialLinks.displayPhone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => copyToClipboard(socialLinks.phone, 'phone')}
                    title="Copy phone number"
                  >
                    {copiedField === 'phone' ? (
                      <span className="text-success"><i className="bi bi-check2"></i> Copied</span>
                    ) : (
                      <i className="bi bi-clipboard"></i>
                    )}
                  </button>
                </div>

                {/* Contact Detail 2: Email */}
                <div className="d-flex align-items-center justify-content-between p-3 rounded-3 mb-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)' }}>
                  <div className="d-flex align-items-center gap-3">
                    <div className="text-cyan fs-4">
                      <i className="bi bi-envelope-at-fill"></i>
                    </div>
                    <div>
                      <div className="text-muted small">Email Address</div>
                      <a href={`mailto:${socialLinks.email}`} className="text-white fw-semibold small text-break">
                        {socialLinks.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => copyToClipboard(socialLinks.email, 'email')}
                    title="Copy email address"
                  >
                    {copiedField === 'email' ? (
                      <span className="text-success"><i className="bi bi-check2"></i> Copied</span>
                    ) : (
                      <i className="bi bi-clipboard"></i>
                    )}
                  </button>
                </div>

                {/* Contact Detail 3: Location */}
                <div className="d-flex align-items-center gap-3 p-3 rounded-3 mb-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)' }}>
                  <div className="text-danger fs-4">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div>
                    <div className="text-muted small">Location</div>
                    <div className="text-white fw-semibold small">{socialLinks.location}</div>
                  </div>
                </div>

                {/* Contact Detail 4: WhatsApp */}
                <div className="d-flex align-items-center justify-content-between p-3 rounded-3 mb-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)' }}>
                  <div className="d-flex align-items-center gap-3">
                    <div className="text-success fs-4">
                      <i className="bi bi-whatsapp"></i>
                    </div>
                    <div>
                      <div className="text-muted small">WhatsApp Quick Chat</div>
                      <div className="text-white fw-semibold small">Instant Messaging Available</div>
                    </div>
                  </div>
                  <a
                    href={socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-success px-3"
                  >
                    Chat Now
                  </a>
                </div>
              </div>

              {/* Recruiter Notice Box */}
              <div className="pt-3 border-top border-secondary border-opacity-25 text-muted small">
                <i className="bi bi-shield-lock-fill text-cyan me-1"></i>
                All inquiries submitted through this form are private and sent directly to my verified contact inbox.
              </div>

            </div>
          </aside>

          {/* Right Column: Interactive Contact Form */}
          <div className="col-lg-7">
            <div className="glass-card p-4 p-md-5 h-100">
              <h3 className="h4 fw-bold text-white mb-2">Send a Message</h3>
              <p className="text-secondary small mb-4">
                Fill in the details below. Connected to Google Forms for automatic recording.
              </p>

              {/* Status Alert Messages */}
              {submitStatus && (
                <div 
                  className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} d-flex align-items-center gap-2 mb-4`} 
                  role="alert"
                >
                  <i className={`bi ${submitStatus.type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill'} fs-5 flex-shrink-0`}></i>
                  <div>{submitStatus.message}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  
                  {/* Name Input */}
                  <div className="col-md-6">
                    <label htmlFor="contact-name" className="form-label text-white small fw-semibold">
                      Your Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control form-control-modern ${errors.name ? 'is-invalid' : ''}`}
                      id="contact-name"
                      name="name"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>

                  {/* Email Input */}
                  <div className="col-md-6">
                    <label htmlFor="contact-email" className="form-label text-white small fw-semibold">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className={`form-control form-control-modern ${errors.email ? 'is-invalid' : ''}`}
                      id="contact-email"
                      name="email"
                      placeholder="e.g. recruiter@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  {/* Phone Input (Optional) */}
                  <div className="col-md-6">
                    <label htmlFor="contact-phone" className="form-label text-white small fw-semibold">
                      Phone Number <span className="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control form-control-modern"
                      id="contact-phone"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Subject Input */}
                  <div className="col-md-6">
                    <label htmlFor="contact-subject" className="form-label text-white small fw-semibold">
                      Subject <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control form-control-modern ${errors.subject ? 'is-invalid' : ''}`}
                      id="contact-subject"
                      name="subject"
                      placeholder="e.g. Job Opportunity / Interview Invite"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                    />
                    {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                  </div>

                  {/* Message Input */}
                  <div className="col-12">
                    <label htmlFor="contact-message" className="form-label text-white small fw-semibold">
                      Your Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className={`form-control form-control-modern ${errors.message ? 'is-invalid' : ''}`}
                      id="contact-message"
                      name="message"
                      rows="5"
                      placeholder="Hi Himanshu, we reviewed your portfolio and would like to discuss an opportunity..."
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                    ></textarea>
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      className="btn btn-modern-primary w-100 justify-content-center py-3"
                      disabled={isSubmitting}
                      id="contact-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Submitting Message...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send-fill me-1"></i>
                          Send Message
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
