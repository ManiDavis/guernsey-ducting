'use client'
import { FormEvent } from 'react'

interface Settings {
  phone?: string | null
  email?: string | null
  address?: string | null
  hours?: string | null
}

export default function Contact({ settings }: { settings: Settings }) {
  const phone = settings.phone ?? '01481 249268'
  const email = settings.email ?? 'guernseyducting@cwgsy.net'
  const address = settings.address ?? 'Bulwer Avenue, St Sampson\nGuernsey GY1 3EB'
  const hours = settings.hours ?? 'Monday – Friday, closes 4:30pm'

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim()
    const company = (form.elements.namedItem('company') as HTMLInputElement).value.trim()
    const emailVal = (form.elements.namedItem('email') as HTMLInputElement).value.trim()
    const phoneVal = (form.elements.namedItem('phone') as HTMLInputElement).value.trim()
    const service = (form.elements.namedItem('service') as HTMLSelectElement).value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim()

    const body = [
      `Name: ${name}`,
      company ? `Company: ${company}` : null,
      `Email: ${emailVal}`,
      phoneVal ? `Phone: ${phoneVal}` : null,
      service ? `Enquiry type: ${service}` : null,
      '',
      message,
    ]
      .filter((l) => l !== null)
      .join('\n')

    const subject = encodeURIComponent(
      `Website Enquiry – ${name}${company ? ` (${company})` : ''}`,
    )
    window.location.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="contact section" id="contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <span className="section-tag">Get in Touch</span>
          <h2>Request a Quote or Ask a Question</h2>
          <p>
            We&apos;re happy to discuss your project, provide advice on specifications, or give you
            a competitive quote. Reach us by phone or email.
          </p>
          <div className="contact-methods">
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="contact-method">
              <div className="cm-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <span className="cm-label">Call Us</span>
                <span className="cm-value">{phone}</span>
              </div>
            </a>
            <a href={`mailto:${email}`} className="contact-method">
              <div className="cm-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M2 8l10 6 10-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <span className="cm-label">Email Us</span>
                <span className="cm-value">{email}</span>
              </div>
            </a>
            <div className="contact-method contact-method-plain">
              <div className="cm-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <div>
                <span className="cm-label">Location</span>
                <span className="cm-value" style={{ whiteSpace: 'pre-line' }}>{address}</span>
              </div>
            </div>
            {hours && (
              <div className="contact-method contact-method-plain">
                <div className="cm-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <span className="cm-label">Hours</span>
                  <span className="cm-value">{hours}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="John Smith" required />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company (optional)</label>
              <input type="text" id="company" name="company" placeholder="ABC Contractors" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="you@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" placeholder="01481 xxxxxx" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="service">Type of Enquiry</label>
            <select id="service" name="service">
              <option value="">Select a service...</option>
              <option>Rectangular Ducting</option>
              <option>Circular / Spiral Ducting</option>
              <option>Flexible Ducting</option>
              <option>Fittings &amp; Accessories</option>
              <option>Sheet Metal Fabrication</option>
              <option>Ventilation System</option>
              <option>Other / General Enquiry</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Describe your project or requirements..."
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-full">
            Send Enquiry
          </button>
          <div className="form-note">
            Or call us directly on <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
          </div>
        </form>
      </div>
    </section>
  )
}
