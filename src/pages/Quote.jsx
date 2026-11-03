import { Clock3, LockKeyhole, ShieldCheck } from 'lucide-react'
import { company } from '../data/company'
import { QuoteForm } from '../components/Forms'
import { PageHero, Eyebrow, Reveal } from '../components/UI'

export default function Quote() {
  return <>
    <PageHero compact eyebrow="Get a quote" title={<>Let’s find your<br />right-fit solution.</>} text="A few details are all we need to start a thoughtful conversation about your security." image="photo-1486406146926-c627a92ad1ab" />
    <section className="section quote-section"><div className="container quote-layout"><Reveal className="quote-aside"><Eyebrow>Your next step</Eyebrow><h2>Every good plan<br />starts with a<br /><span>conversation.</span></h2><p>Tell us a little about your site and what you have in mind. Our team will review your request and follow up with next steps.</p><div className="quote-benefits"><div><Clock3 size={18} /><span><strong>Quick response</strong><small>We’ll be in touch as soon as possible.</small></span></div><div><LockKeyhole size={18} /><span><strong>Confidential by design</strong><small>Your details stay with our team.</small></span></div><div><ShieldCheck size={18} /><span><strong>No-obligation conversation</strong><small>Just practical advice for your needs.</small></span></div></div><div className="quote-direct"><span>Prefer to speak with someone?</span><a href={`tel:${company.phoneRaw}`}>{company.phone}</a></div></Reveal><Reveal className="form-panel"><div className="form-panel-heading"><span>REQUEST A PROPOSAL</span><small>Fields marked <b>*</b> are required</small></div><QuoteForm /></Reveal></div></section>
  </>
}
