import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Building2, ChevronDown, Factory, GraduationCap, HeartPulse, House, Landmark, ShieldCheck, ShoppingBag, Ticket } from 'lucide-react'
import { Link } from 'react-router-dom'
import { faqs, industries, services } from '../data/company'
import { ButtonLink, CheckItem, Eyebrow, Reveal } from './UI'

const industryIcons = {
  Building2, Factory, House, HeartPulse, GraduationCap, ShoppingBag, Ticket, Landmark,
}

export function IndustryIcon({ name, size = 19 }) {
  const Icon = industryIcons[name] || ShieldCheck
  return <Icon size={size} strokeWidth={1.6} />
}

export function IntroSection() {
  return (
    <section className="section intro-section">
      <div className="container intro-grid">
        <Reveal><Eyebrow>Protection with purpose</Eyebrow><h2>More than security.<br /><span>Peace of mind.</span></h2></Reveal>
        <Reveal delay={0.12}><div className="intro-copy"><p className="lead">The right security presence does more than protect a place. It gives people the confidence to do their best work, welcome guests and feel at home.</p><p>Sentinel brings experienced people, thoughtful planning and dependable oversight together in one responsive security partner. Every detail is handled with care—because trust is earned in the moments that matter.</p><ButtonLink to="/about" variant="text">Get to know Sentinel</ButtonLink></div></Reveal>
      </div>
      <div className="container stats-strip">
        {[['24/7', 'Operations support'], ['98%', 'Client retention'], ['1,200+', 'Trained professionals'], ['15+', 'Years of experience']].map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </div>
    </section>
  )
}

export function ServicesSection({ limit }) {
  const items = limit ? services.slice(0, limit) : services
  return (
    <section className="section section-cream">
      <div className="container">
        <div className="section-heading"><Reveal><Eyebrow>What we do</Eyebrow><h2>Protection that fits<br />the way you work.</h2></Reveal><Reveal className="heading-side"><p>One trusted partner. The right people, prepared for your environment and ready when you need them.</p><ButtonLink to="/services" variant="text">Explore all services</ButtonLink></Reveal></div>
        <div className="service-grid">{items.map((service, i) => <Reveal key={service.tag} delay={(i % 3) * .06}><Link to="/services" className="service-card"><div className="service-image" style={{ backgroundImage: `url(https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=780&q=80)` }}><span>{service.tag}</span></div><div className="service-body"><h3>{service.title}</h3><p>{service.text}</p><span className="card-link">Discover service <ArrowRight size={15} /></span></div></Link></Reveal>)}</div>
      </div>
    </section>
  )
}

export function IndustriesSection({ compact = false }) {
  return (
    <section className="section industries-section">
      <div className="container">
        <div className="section-heading"><Reveal><Eyebrow>Industries we serve</Eyebrow><h2>Insight for every<br />environment.</h2></Reveal><Reveal className="heading-side"><p>Different places call for different perspectives. We listen first, then shape our approach around how your world works.</p><ButtonLink to="/industries" variant="text">View all industries</ButtonLink></Reveal></div>
        <div className="industry-grid">{industries.slice(0, compact ? 6 : 8).map((industry, i) => <Reveal key={industry.title} delay={(i % 4) * .05}><div className="industry-item"><span className="industry-icon"><IndustryIcon name={industry.icon} /></span><div><h3>{industry.title}</h3><p>{industry.text}</p></div><ArrowUpRight className="industry-arrow" size={16} /></div></Reveal>)}</div>
      </div>
    </section>
  )
}

export function WhySection() {
  return (
    <section className="section why-section">
      <div className="container why-grid">
        <Reveal className="why-photo"><img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=85" alt="Security professional meeting with a client" /><div className="photo-caption"><ShieldCheck size={20} /><span>Prepared people.<br /><strong>Peace of mind.</strong></span></div><div className="photo-index">SENTINEL / 01</div></Reveal>
        <Reveal className="why-content"><Eyebrow>The Sentinel difference</Eyebrow><h2>Good security starts<br />with <span>good people.</span></h2><p className="lead">Our people are the difference you can see—and the reassurance you can feel.</p><div className="why-list"><CheckItem>Carefully screened, licensed professionals</CheckItem><CheckItem>Role-specific training and ongoing development</CheckItem><CheckItem>Responsive supervision and clear accountability</CheckItem><CheckItem>Plans shaped around your people and place</CheckItem></div><ButtonLink to="/why-us">Why clients choose us</ButtonLink></Reveal>
      </div>
    </section>
  )
}

export function ProcessSection() {
  const steps = [['01', 'We listen', 'We understand your environment, priorities and the experience you want people to have.'], ['02', 'We plan', 'A security specialist builds a right-sized approach, then walks you through every detail.'], ['03', 'We deliver', 'The right people arrive prepared, supported and clear on what great service looks like.'], ['04', 'We improve', 'Ongoing supervision and regular check-ins keep your program responsive as needs evolve.']]
  return <section className="section process-section"><div className="container"><div className="section-heading"><Reveal><Eyebrow>How we work</Eyebrow><h2>Thoughtful from<br />day one.</h2></Reveal><Reveal className="heading-side"><p>Clear communication. No surprises. A partner who stays close from first conversation to everyday delivery.</p></Reveal></div><div className="process-grid">{steps.map(([number, title, text]) => <Reveal key={number}><div className="process-card"><span>{number}</span><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div></div></section>
}

export function TestimonialSection() {
  return <section className="testimonial-section"><div className="container testimonial-inner"><Reveal><Eyebrow light>In good company</Eyebrow><div className="quote-mark">“</div><blockquote>Sentinel made a complicated transition feel seamless. Their team is professional, proactive and genuinely invested in the people they protect.</blockquote><div className="quote-author"><span className="author-line" /><div><strong>Director of Operations</strong><small>National commercial property group</small></div></div></Reveal><div className="testimonial-aside"><span>TRUSTED PARTNERSHIPS</span><div className="partner-logos"><b>northstar<span>.</span></b><b>VANTAGE</b><b>MERIDIAN</b><b>HARBOR<span>+</span></b></div></div></div></section>
}

export function FAQSection() {
  const [open, setOpen] = useState(0)
  return <section className="section faq-section"><div className="container faq-grid"><Reveal><Eyebrow>Questions, answered</Eyebrow><h2>Good to know.</h2><p className="faq-intro">Still wondering if Sentinel is the right fit? We’re always happy to talk through the details.</p><Link to="/contact" className="text-link">Talk to a specialist <ArrowRight size={15} /></Link></Reveal><div className="faq-list">{faqs.map((faq, i) => <Reveal key={faq.question}><div className={`faq-item ${open === i ? 'faq-open' : ''}`}><button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}><span>{faq.question}</span><ChevronDown size={18} /></button>{open === i && <p>{faq.answer}</p>}</div></Reveal>)}</div></div></section>
}

export function ClosingCta() {
  return <section className="closing-cta"><div className="container closing-inner"><Reveal><Eyebrow light>Your next step</Eyebrow><h2>Let’s make safety<br />a certainty.</h2><p>Tell us a little about what you need. We’ll take it from here.</p><ButtonLink>Request a tailored proposal</ButtonLink></Reveal><div className="closing-watermark"><ShieldCheck size={250} strokeWidth={.55} /></div></div></section>
}
