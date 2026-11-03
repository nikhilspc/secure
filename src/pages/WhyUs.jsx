import { BadgeCheck, ClipboardCheck, Eye, GraduationCap, ShieldCheck } from 'lucide-react'
import { ClosingCta } from '../components/Sections'
import { PageHero, Eyebrow, Reveal, CheckItem, ButtonLink } from '../components/UI'

const pillars = [
  { icon: BadgeCheck, number: '01', title: 'People we’re proud to place', text: 'We take care with selection, screening and role fit, so the people representing your organization feel like the right choice.' },
  { icon: GraduationCap, number: '02', title: 'Training that keeps growing', text: 'Role-specific preparation and ongoing development give our teams the confidence to respond professionally.' },
  { icon: Eye, number: '03', title: 'Present, engaged supervision', text: 'Our supervisors stay connected to the sites and teams they support, helping issues surface early and standards stay high.' },
  { icon: ClipboardCheck, number: '04', title: 'Quality you can see', text: 'Clear expectations, regular check-ins and documented procedures make accountability part of the everyday.' },
]

export default function WhyUs() {
  return <>
    <PageHero eyebrow="Why Sentinel" title={<>The confidence of<br />knowing it’s handled.</>} text="Reliable protection takes more than putting someone at a post. It takes the right people, ready support and a partner who stays accountable." image="photo-1521791136064-7986c2920216" />
    <section className="section why-intro"><div className="container why-intro-grid"><Reveal><Eyebrow>Made to be dependable</Eyebrow><h2>Better security is<br /><span>felt, not just seen.</span></h2></Reveal><Reveal><p className="lead">You notice it in the warm welcome. The thoughtful response. The details already taken care of.</p><p>That’s the standard we work toward on every assignment. Our people bring a calm, professional presence—supported by a team that plans carefully, communicates openly and keeps paying attention.</p></Reveal></div></section>
    <section className="section section-cream standards-section"><div className="container"><div className="section-heading"><Reveal><Eyebrow>Our standards</Eyebrow><h2>Trust is a practice.<br />Here’s how we earn it.</h2></Reveal><Reveal className="heading-side"><p>Our approach is deliberate at every stage—from who we hire to how we learn and improve.</p></Reveal></div><div className="standards-grid">{pillars.map(({ icon: Icon, number, title, text }, i) => <Reveal key={number}><article className="standard-card"><div className="standard-top"><Icon size={23} /><span>{number}</span></div><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></div></section>
    <section className="section quality-section"><div className="container quality-grid"><Reveal className="quality-image"><img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1050&q=85" alt="Security team members discussing site procedures" /><div className="quality-badge"><ShieldCheck size={22} /><span>Quality<br />in action</span></div></Reveal><Reveal><Eyebrow>Beyond the first day</Eyebrow><h2>Support that<br />stays close.</h2><p className="lead">Our responsibility doesn’t end when a shift begins.</p><p>We build practical communication into every assignment, so officers have support, clients know who to reach and small issues don’t become bigger ones. With regular review and open feedback, we keep your program aligned with what matters most.</p><div className="quality-checks"><CheckItem>Clearly defined post orders</CheckItem><CheckItem>Dedicated operational contacts</CheckItem><CheckItem>Consistent site supervision</CheckItem><CheckItem>Regular service reviews</CheckItem></div><ButtonLink>Talk about your site</ButtonLink></Reveal></div></section>
    <ClosingCta />
  </>
}
