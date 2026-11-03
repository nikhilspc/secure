import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data/company'
import { ClosingCta } from '../components/Sections'
import { PageHero, Eyebrow, Reveal, CheckItem } from '../components/UI'

export default function Services() {
  return <>
    <PageHero eyebrow="Our services" title={<>A higher standard<br />of everyday security.</>} text="People-first protection, thoughtfully matched to your environment, priorities and the people who count on you." image="photo-1519608487953-e999c86e7455" />
    <section className="section service-intro"><div className="container service-intro-grid"><Reveal><Eyebrow>One partner. The right protection.</Eyebrow><h2>Built around your<br /><span>real-world needs.</span></h2></Reveal><Reveal><p className="lead">From a single event to a multi-site program, we bring together the people, planning and oversight to make your security work.</p><div className="service-points"><CheckItem>Flexible coverage and clear scope</CheckItem><CheckItem>Professional, appropriately licensed staff</CheckItem><CheckItem>Responsive support from a dedicated team</CheckItem></div></Reveal></div></section>
    <section className="section section-cream service-full-list"><div className="container"><div className="service-full-grid">{services.map((service, i) => <Reveal key={service.tag} delay={(i % 2) * .06}><article className="service-detail"><div className="service-detail-image" style={{ backgroundImage: `url(https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=1000&q=82)` }}><span>{service.tag}</span></div><div className="service-detail-copy"><div><Eyebrow>Sentinel / {service.tag}</Eyebrow><h3>{service.title}</h3><p>{service.text}</p></div><Link to="/quote" aria-label={`Request a quote for ${service.title}`}><ArrowRight size={19} /></Link></div></article></Reveal>)}</div></div></section>
    <section className="service-assurance"><div className="container service-assurance-inner"><ShieldCheck size={28} /><p>Every service begins with the same commitment: trained people, thoughtful oversight and the respect your people deserve.</p></div></section>
    <ClosingCta />
  </>
}
