import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, ChevronDown, Menu, Phone, Shield, X } from 'lucide-react'
import { company } from '../data/company'

const links = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services', children: true },
  { label: 'Industries', to: '/industries' },
  { label: 'Why Sentinel', to: '/why-us' },
  { label: 'Contact', to: '/contact' },
]

export function Brand({ light = false }) {
  return (
    <Link to="/" className={`brand ${light ? 'brand-light' : ''}`} aria-label="Sentinel Security home">
      <span className="brand-mark"><Shield size={22} strokeWidth={1.5} /><i /></span>
      <span className="brand-type"><strong>{company.name}</strong><small>{company.descriptor}</small></span>
    </Link>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="topbar"><div className="container topbar-inner"><span>Trusted protection. Human confidence.</span><a href={`tel:${company.phoneRaw}`}><Phone size={13} /> {company.phone}</a></div></div>
      <header className="site-header">
        <div className="container nav-inner">
          <Brand />
          <nav className={`main-nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
            {links.map((link) => (
              <NavLink key={link.to} onClick={() => setOpen(false)} to={link.to} className={({ isActive }) => `nav-link ${isActive ? 'nav-active' : ''}`}>
                {link.label}{link.children && <ChevronDown size={13} />}
              </NavLink>
            ))}
            <a className="mobile-phone" href={`tel:${company.phoneRaw}`}><Phone size={15} /> {company.phone}</a>
          </nav>
          <div className="nav-actions">
            <a href={`tel:${company.phoneRaw}`} className="nav-call"><Phone size={15} /><span>Call our team</span></a>
            <Link to="/quote" className="button button-gold nav-quote">Get a quote <ArrowUpRight size={15} /></Link>
          </div>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
        </div>
      </header>
    </>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-about"><Brand light /><p>Confidence in every detail. People-first security solutions, delivered with care, precision and accountability.</p><a className="footer-social" href={company.whatsapp} target="_blank" rel="noreferrer">Connect on WhatsApp <ArrowUpRight size={14} /></a></div>
          <div className="footer-column"><h4>Explore</h4><Link to="/about">About Sentinel</Link><Link to="/services">Our services</Link><Link to="/industries">Industries</Link><Link to="/why-us">Why choose us</Link></div>
          <div className="footer-column"><h4>Get in touch</h4><a href={`tel:${company.phoneRaw}`}>{company.phone}</a><a href={`mailto:${company.email}`}>{company.email}</a><p>{company.address}</p><small>{company.hours}</small></div>
          <div className="footer-cta"><div className="footer-cta-mark"><Shield size={22} /></div><h3>Let’s make safety a certainty.</h3><p>Tell us what you need. We’ll take it from here.</p><Link to="/quote" className="button button-gold">Request a proposal <ArrowUpRight size={15} /></Link></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Sentinel Security Group. All rights reserved.</span><span>Professional protection. Personal commitment.</span></div>
      </div>
    </footer>
  )
}

export default function Layout({ children }) {
  return <><Header /><main>{children}</main><Footer /><a className="whatsapp-float" href={company.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp"><span className="wa-icon">◉</span><span>Chat with us</span></a></>
}
