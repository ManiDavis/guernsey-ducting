// ============================================
// GUERNSEY DUCTING — MAIN JS
// ============================================

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});

// Close nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// Sticky header shadow
const header = document.getElementById('top').parentElement || document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    document.querySelector('.site-header').style.boxShadow = '0 2px 20px rgba(0,0,0,.3)';
  } else {
    document.querySelector('.site-header').style.boxShadow = 'none';
  }
}, { passive: true });

// Contact form — simple mailto fallback (no backend)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = form.name.value.trim();
    const company = form.company.value.trim();
    const email   = form.email.value.trim();
    const phone   = form.phone.value.trim();
    const service = form.service.value;
    const message = form.message.value.trim();

    const body = [
      `Name: ${name}`,
      company ? `Company: ${company}` : null,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      service ? `Enquiry type: ${service}` : null,
      '',
      message,
    ].filter(l => l !== null).join('\n');

    const subject = encodeURIComponent(`Website Enquiry – ${name}${company ? ' (' + company + ')' : ''}`);
    const bodyEnc = encodeURIComponent(body);

    window.location.href = `mailto:guernseyducting@cwgsy.net?subject=${subject}&body=${bodyEnc}`;
  });
}

// Intersection Observer — fade-in cards on scroll
const fadeEls = document.querySelectorAll('.service-card, .pillar, .contact-method');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
  observer.observe(el);
});
