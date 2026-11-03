import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { company } from '../data/company'
import { ContactForm } from '../components/Forms'
import { PageHero, Eyebrow, Reveal } from '../components/UI'

const contactItems = [
  { icon: Phone, label: 'Call us', value: company.phone, href: `tel:${company.phoneRaw}` },
  { icon: Mail, label: 'Email our team', value: company.email, href: `mailto:${company.email}` },
  { icon: MapPin, label: 'Visit our office', value: company.address, href: 'https://maps.google.com/?q=1200+Brickell+Avenue+Miami+FL' },
  { icon: Clock3, label: 'Operations support', value: company.hours, href: null },
]

export default function Contact() {
  return <>
    <PageHero compact eyebrow="Contact Sentinel" title={<>Good conversations<br />start here.</>} text="Talk with a real person who understands security—and is ready to understand what you need." image="photo-1497366811353-6870744d04b2" />
    <section className="section contact-section"><div className="container contact-layout"><Reveal className="contact-details"><Eyebrow>We’re here to help</Eyebrow><h2>Let’s talk about<br /><span>what matters.</span></h2><p className="lead">Whether you’re exploring options or ready to get started, we’d love to hear from you.</p><div className="contact-methods">{contactItems.map(({ icon: Icon, label, value, href }) => <div className="contact-method" key={label}><span className="contact-icon"><Icon size={18} /></span><div><small>{label}</small>{href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{value}</a> : <strong>{value}</strong>}</div></div>)}</div><div className="map-card"><iframe title="Sentinel Security office location in Miami" src="https://maps.google.com/maps?q=1200%20Brickell%20Avenue%2C%20Miami%2C%20FL&t=&z=13&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></Reveal><Reveal className="form-panel contact-form-panel"><div className="form-panel-heading"><span>SEND US A MESSAGE</span><small>We typically respond within one business day.</small></div><ContactForm /></Reveal></div></section>
  </>
}
