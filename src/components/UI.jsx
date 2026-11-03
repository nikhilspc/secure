import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export function Eyebrow({ children, light = false }) {
  return <div className={`eyebrow ${light ? 'eyebrow-light' : ''}`}><span />{children}</div>
}

export function ButtonLink({ to = '/quote', children, variant = 'gold', className = '' }) {
  return (
    <Link className={`button button-${variant} ${className}`} to={to}>
      {children}<ArrowRight size={16} strokeWidth={1.8} />
    </Link>
  )
}

export function PageHero({ eyebrow, title, text, image, compact = false }) {
  return (
    <section className={`page-hero ${compact ? 'page-hero-compact' : ''}`} style={{ backgroundImage: `linear-gradient(90deg, rgba(11,23,42,.92) 0%, rgba(11,23,42,.76) 48%, rgba(11,23,42,.34) 100%), url(https://images.unsplash.com/${image}?auto=format&fit=crop&w=2200&q=85)` }}>
      <div className="container page-hero-content">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  )
}

export function CheckItem({ children }) {
  return <div className="check-item"><span><Check size={14} /></span>{children}</div>
}
