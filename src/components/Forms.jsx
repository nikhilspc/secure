import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { company, services } from '../data/company'

const initialQuote = {
  name: '', companyName: '', mobile: '', email: '', city: '', address: '',
  service: '', guards: '', guardType: '', shift: '', startDate: '', requirements: '',
}

function SuccessNotice({ title = 'Thank you for reaching out.' }) {
  return <div className="success-notice" role="status"><CheckCircle2 size={26} /><div><strong>{title}</strong><p>A Sentinel security specialist will be in touch shortly. For immediate assistance, call <a href={`tel:${company.phoneRaw}`}>{company.phone}</a>.</p></div></div>
}

export function QuoteForm() {
  const [values, setValues] = useState(initialQuote)
  const [submitted, setSubmitted] = useState(false)
  const update = (event) => setValues({ ...values, [event.target.name]: event.target.value })
  const submit = (event) => { event.preventDefault(); setSubmitted(true); setValues(initialQuote); window.scrollTo({ top: document.querySelector('.form-panel')?.offsetTop - 100, behavior: 'smooth' }) }
  if (submitted) return <SuccessNotice title="Your request is on its way." />
  return (
    <form className="lead-form" onSubmit={submit}>
      <div className="form-section-label"><span>01</span><div><strong>About you</strong><small>How can we get in touch?</small></div></div>
      <div className="form-grid">
        <label>Full name <b>*</b><input name="name" value={values.name} onChange={update} placeholder="Your name" autoComplete="name" required /></label>
        <label>Company name<input name="companyName" value={values.companyName} onChange={update} placeholder="Organization" autoComplete="organization" /></label>
        <label>Mobile number <b>*</b><input name="mobile" value={values.mobile} onChange={update} type="tel" placeholder="+1 (555) 000-0000" autoComplete="tel" required pattern="[+0-9().\-\s]{7,20}" title="Enter a valid phone number" /></label>
        <label>Work email <b>*</b><input name="email" value={values.email} onChange={update} type="email" placeholder="you@company.com" autoComplete="email" required /></label>
      </div>
      <div className="form-section-label"><span>02</span><div><strong>About your site</strong><small>Help us understand the assignment.</small></div></div>
      <div className="form-grid">
        <label>City <b>*</b><input name="city" value={values.city} onChange={update} placeholder="City" autoComplete="address-level2" required /></label>
        <label>Service address<input name="address" value={values.address} onChange={update} placeholder="Street address" autoComplete="street-address" /></label>
        <label>Service required <b>*</b><select name="service" value={values.service} onChange={update} required><option value="">Select a service</option>{services.map((service) => <option key={service.tag}>{service.title}</option>)}</select></label>
        <label>Number of guards<input name="guards" value={values.guards} onChange={update} type="number" min="1" max="500" placeholder="e.g. 4" /></label>
        <label>Guard type<select name="guardType" value={values.guardType} onChange={update}><option value="">Select type</option><option>Unarmed</option><option>Armed</option><option>Female officers</option><option>Not sure yet</option></select></label>
        <label>Duty shift<select name="shift" value={values.shift} onChange={update}><option value="">Select shift</option><option>Day</option><option>Night</option><option>24-hour coverage</option><option>Flexible / event-based</option></select></label>
        <label>Target start date<input name="startDate" value={values.startDate} onChange={update} type="date" min={new Date().toISOString().split('T')[0]} /></label>
        <label className="form-full">Additional requirements<textarea name="requirements" value={values.requirements} onChange={update} rows="4" placeholder="Share any important details about your site, schedule or priorities." /></label>
      </div>
      <p className="form-privacy">Your information is kept confidential and used only to respond to your request.</p>
      <button className="button button-gold form-submit" type="submit">Send my request <Send size={16} /></button>
    </form>
  )
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const submit = (event) => { event.preventDefault(); setSubmitted(true) }
  if (submitted) return <SuccessNotice title="Your message has been received." />
  return <form className="lead-form contact-form" onSubmit={submit}><div className="form-grid"><label>Your name <b>*</b><input name="name" placeholder="Your name" autoComplete="name" required /></label><label>Email address <b>*</b><input name="email" type="email" placeholder="you@company.com" autoComplete="email" required /></label><label className="form-full">How can we help? <b>*</b><textarea name="message" rows="5" placeholder="Tell us what you have in mind..." required /></label></div><button className="button button-gold form-submit" type="submit">Send message <Send size={16} /></button></form>
}
