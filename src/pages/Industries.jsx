import { industries } from '../data/company'
import { IndustryIcon, IndustriesSection, ClosingCta } from '../components/Sections'
import { PageHero, Eyebrow, Reveal, ButtonLink } from '../components/UI'

export default function Industries() {
  return <>
    <PageHero eyebrow="Industries we serve" title={<>We understand your<br />world of work.</>} text="Every environment has its own rhythm, risks and responsibilities. Our approach starts by understanding yours." image="photo-1497366754035-f200968a6e72" />
    <section className="section industry-overview"><div className="container industry-overview-grid"><Reveal><Eyebrow>Experience with context</Eyebrow><h2>Security that feels<br /><span>right for the place.</span></h2></Reveal><Reveal><p className="lead">A welcoming lobby, a busy campus and a working warehouse have very different needs. We bring the right perspective to each one.</p><p>Our teams learn how your site operates, who uses it and what a good day looks like. From that foundation, we create an approach that supports your people and helps your business keep moving.</p><ButtonLink to="/quote" variant="text">Find your security fit</ButtonLink></Reveal></div></section>
    <section className="section section-cream industry-list-section"><div className="container"><div className="section-heading"><Reveal><Eyebrow>Where we work</Eyebrow><h2>Versatile by design.<br />Specialized in practice.</h2></Reveal><Reveal className="heading-side"><p>Across industries, the details change. Our commitment to attentive, professional service never does.</p></Reveal></div><div className="industry-list-grid">{industries.map((item, index) => <Reveal key={item.title} delay={index * .05}><article className="industry-large-card"><span>0{index + 1}</span><div className="industry-large-icon"><IndustryIcon name={item.icon} size={21} /></div><h3>{item.title}</h3><p>{item.text}. We tailor staffing and site procedures to your operational needs and the people you serve.</p><ButtonLink to="/quote" variant="text">Discuss your needs</ButtonLink></article></Reveal>)}</div></div></section>
    <IndustriesSection compact />
    <ClosingCta />
  </>
}
