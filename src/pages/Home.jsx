import { ArrowDown, ArrowRight, Play, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '../data/company'
import { ClosingCta, FAQSection, IndustriesSection, IntroSection, ProcessSection, ServicesSection, TestimonialSection, WhySection } from '../components/Sections'
import { ButtonLink, Eyebrow, Reveal } from '../components/UI'

export default function Home() {
  return <>
    <section className="home-hero">
      <div className="hero-image" />
      <div className="container hero-content"><Reveal><Eyebrow light>Confidence in every detail</Eyebrow><h1>Protection that<br />puts <em>people first.</em></h1><p>Professional security for the places where life and business happen. Thoughtful people, prepared to protect what matters.</p><div className="hero-actions"><ButtonLink>Let’s talk about security</ButtonLink><a className="hero-call" href={`tel:${company.phoneRaw}`}><span className="play-circle"><Play size={13} fill="currentColor" /></span> Speak with our team</a></div></Reveal></div>
      <div className="hero-bottom container"><span><ArrowDown size={14} /> SCROLL TO EXPLORE</span><span><ShieldCheck size={17} /> Trusted protection, around the clock</span><span>EST. 2009&nbsp; — &nbsp;NORTH AMERICA</span></div>
      <div className="hero-accent">01 / 04</div>
    </section>
    <IntroSection />
    <ServicesSection limit={6} />
    <IndustriesSection compact />
    <WhySection />
    <ProcessSection />
    <TestimonialSection />
    <FAQSection />
    <ClosingCta />
  </>
}
