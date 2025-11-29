import { useState } from 'react';
import headshot from './assets/professional-headshot.jpg';
import { Layout, RefreshCcw, Zap, LinkedinIcon } from 'lucide-react'

const CONTACT_EMAIL = 'being.jasmin.miranda@gmail.com';
const CALENDLY_URL =
  'https://calendly.com/being-jasmin-miranda/15-minute-website-intro-call';
const GOLDEN_HOUR_URL = 'https://goldenhourcleaningco.com';

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        {title && (
          <h2 className="mb-6 text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}

export default function App() {
  const [photoOpen, setPhotoOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    website: '',
    needs: '',
    timeline: '',
    budget: '',
    openToRebuild: 'yes',
  });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent('New Website Project Inquiry');
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Business: ${form.business}`,
        `Current website: ${form.website || 'N/A'}`,
        '',
        `What you need built:`,
        `${form.needs}`,
        '',
        `Timeline: ${form.timeline || 'Not specified'}`,
        `Open to full rebuild: ${form.openToRebuild}`,
        `Approximate budget: ${form.budget || 'Not specified'}`,
      ].join('\n')
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen bg-violet-50 text-stone-900">
      {/* Top nav / header */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-violet-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">

          {/* Left: Logo + Name */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPhotoOpen(true)}
              className="h-8 w-8 overflow-hidden rounded-full border border-violet-100 bg-violet-50 focus:outline-none"
              aria-label="Open photo"
            >
              <img
                src={headshot}
                alt="Jasmin Miranda Bergsgaard"
                className="h-full w-full object-cover"
              />
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="leading-tight text-left focus:outline-none"
              aria-label="Scroll to top"
            >
              <div className="text-sm font-semibold tracking-tight hover:underline">
                Websites by Jasmin
              </div>
              <div className="text-xs text-stone-500">
                Web engineer &amp; custom site builder
              </div>
            </button>

          </div>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex gap-6 text-sm text-stone-600">
            <a href="#services" className="hover:text-stone-900">Services</a>
            <a href="#projects" className="hover:text-stone-900">Sample</a>
            <a href="#process" className="hover:text-stone-900">How it works</a>
            <a href="#about" className="hover:text-stone-900">About me</a>
            <a href="#intake" className="hover:text-stone-900">Start a project</a>
          </nav>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden flex items-center justify-center rounded-md p-2 text-stone-700 hover:bg-violet-100 transition"
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h16M3 11h16M3 16h16" />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40 bg-black/30"
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu */}
            <div className="absolute top-full left-0 right-0 z-50 bg-white border-t border-violet-100 shadow-md animate-fade-in-down">
              <nav className="flex flex-col p-4 gap-3 text-sm text-stone-700">
                {[
                  { href: "#services", label: "Services" },
                  { href: "#projects", label: "Sample" },
                  { href: "#process", label: "How it works" },
                  { href: "#about", label: "About me" },
                  { href: "#intake", label: "Start a project" },
                ].map(item => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-md px-3 py-2 hover:bg-violet-50 transition"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </>
        )}
      </header>


      <main className="pt-20">
        {/* Hero */}
        <section className="border-b border-violet-100 bg-gradient-to-b from-violet-50 to-violet-100">
          <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 sm:flex-row sm:items-center sm:py-24">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700 shimmer-text">
                Custom websites from scratch
              </p>
              <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-stone-900">
                Clean, modern websites built the right way from day one.
              </h1>
              <p className="mt-4 max-w-xl text-sm sm:text-base text-stone-600">
                I design and build custom websites for small businesses and
                founders who are ready for a fresh start online—no templates,
                no patchwork, and no “mystery tech.”
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#intake"
                  className="sparkle-btn inline-flex relative overflow-hidden items-center justify-center rounded-full bg-stone-900 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-500"
                >
                  <span className="sparkle-layer" />
                  <span className="relative z-10">Start a new website project</span>
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-800 hover:border-stone-400"
                >
                  See what I build
                </a>
                {CALENDLY_URL && (
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-800 hover:border-stone-400"
                  >
                    Book a quick intro call
                  </a>
                )}
              </div>
              <div className="mt-4 flex items-start gap-3">
                <img
                  src={headshot}
                  alt="Photo of Jasmin"
                  className="h-20 w-20 rounded-full object-cover border border-stone-200"
                />

                <p className="text-xs text-stone-500 leading-snug">
                  Senior web engineer at Nike by day; custom site builder for
                  founders and service businesses on the side.
                  <br />
                  Thoughtful, calm builds with intuitive design and clear communication.
                </p>
              </div>

            </div>

            <div className="flex-1 rounded-2xl border border-violet-100 bg-white p-4 text-sm shadow-sm">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                What I’m good at
              </div>
              <ul className="space-y-2 text-stone-700">
                <li>• New websites for service businesses</li>
                <li>• Full rebuilds of outdated or DIY sites</li>
                <li>• Simple 1–5 page sites and focused “mini sites”</li>
                <li>• Clean, modern layouts with thoughtful UX</li>
                <li>• Front-end only builds deployed to your domain</li>
              </ul>
              <div className="mt-4 rounded-xl bg-violet-50 p-3 text-xs text-stone-600">
                I don’t fix random bugs on existing sites. I rebuild them cleanly
                so they’re easy to maintain going forward.
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <Section id="services" title="What I build">
          <div className="grid gap-6 md:grid-cols-3">
            {/* NEW SITES */}
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-violet-100 p-2 text-violet-700">
                  <Layout size={18} />
                </div>
                <h3 className="text-sm font-semibold text-stone-900">
                  New websites (1–5 pages)
                </h3>
              </div>

              <p className="mt-3 text-sm text-stone-600">
                From a blank page to a live site. Strategy, structure, design,
                and development—for new businesses or offers that need a clean
                start online.
              </p>

              <ul className="mt-3 space-y-1 text-xs text-stone-600">
                <li>• Mobile-friendly, responsive layout</li>
                <li>• Clear navigation and structure</li>
                <li>• Contact / inquiry paths built in</li>
              </ul>
            </div>

            {/* REBUILDS */}
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-violet-100 p-2 text-violet-700">
                  <RefreshCcw size={18} />
                </div>
                <h3 className="text-sm font-semibold text-stone-900">
                  Full website rebuilds
                </h3>
              </div>

              <p className="mt-3 text-sm text-stone-600">
                Not a tweak—a fresh start. I take what's working (brand,
                copy, photos) and rebuild your site with clean code and a modern
                look.
              </p>

              <ul className="mt-3 space-y-1 text-xs text-stone-600">
                <li>• Replace clunky DIY or legacy sites</li>
                <li>• Clean, maintainable front-end</li>
                <li>• Faster, more professional experience</li>
              </ul>
            </div>

            {/* PROJECT PAGES */}
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-violet-100 p-2 text-violet-700">
                  <Zap size={18} />
                </div>
                <h3 className="text-sm font-semibold text-stone-900">
                  Focused project pages
                </h3>
              </div>

              <p className="mt-3 text-sm text-stone-600">
                Simple one-page or mini-sites for a specific offer, event, or
                service. Designed to be clear, focused, and easy to act on.
              </p>

              <ul className="mt-3 space-y-1 text-xs text-stone-600">
                <li>• Offer / event pages</li>
                <li>• Lead or booking funnels</li>
                <li>• Built to plug into your existing domain</li>
              </ul>
            </div>
          </div>

          {/* DON'T DO */}
          <div className="mt-8 rounded-2xl border border-dashed border-violet-200 bg-violet-50 p-5 text-sm text-stone-700">
            <h3 className="text-sm font-semibold text-stone-900">
              What I don't do
            </h3>

            <p className="mt-2 text-sm text-stone-600">
              To keep projects clean and efficient, I don't take on:
            </p>

            <ul className="mt-2 space-y-1 text-sm text-stone-600">
              <li>• One-off bug fixes on existing sites</li>
              <li>• Random plugin or theme issues</li>
              <li>• Deep debugging in legacy codebases</li>
            </ul>

            <p className="mt-3 text-sm text-stone-600">
              If your current site feels messy or fragile, it's usually
              faster and more cost-effective to rebuild it properly—and
              that's exactly what I do.
            </p>
          </div>
        </Section>

        {/* Case study */}
        <Section id="projects" title="A real project I built">
          <div className="rounded-3xl border border-violet-200 bg-white shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-[1.2fr,1fr]">
              {/* Left: Description */}
              <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-violet-100">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
                  Case study
                </p>

                <h3 className="text-sm font-semibold text-stone-900">
                  Golden Hour Cleaning Co.
                </h3>

                <p className="mt-2 text-sm text-stone-600">
                  A premium eco-cleaning brand and website I designed and built from
                  scratch for a real eco-cleaning business. The site includes a custom
                  quote calculator and booking flow so visitors can go from “curious” to
                  “scheduled” in just a few clicks.
                </p>

                <p className="mt-3 text-sm text-stone-600">
                  Behind the scenes, the site handles pricing logic, estimated cleaning
                  time, and lead capture automatically—so the business owner can spend
                  less time replying to inquiry emails and more time doing great work.
                </p>

                {/* Skill / feature pills */}
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-stone-700">
                  <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1">
                    Custom quote calculator
                  </span>
                  <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1">
                    Booking flow &amp; lead capture
                  </span>
                  <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1">
                    Coded from scratch (no templates)
                  </span>
                  <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1">
                    Mobile-friendly layout
                  </span>
                  <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1">
                    Deployed to custom domain
                  </span>
                </div>

                <a
                  href={GOLDEN_HOUR_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-stone-900 px-4 py-2 text-xs font-medium text-stone-50 hover:bg-stone-800 transition"
                >
                  View live site ↗
                </a>
              </div>

              {/* Right: Visual preview */}
              <div className="bg-stone-950 text-white/80">
                <div className="text-xs uppercase tracking-[0.2em] px-6 pt-4 pb-2 text-violet-400">
                  Live preview
                </div>

                <div className="overflow-hidden border-t border-stone-800">
                  {/* Fake browser chrome */}
                  <div className="flex items-center gap-1 border-b border-stone-800 bg-stone-900 px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                    <span className="ml-3 truncate text-xs text-stone-400">
                      {GOLDEN_HOUR_URL}
                    </span>
                  </div>

                  {/* Scaled iframe */}
                  <div className="relative w-full overflow-hidden" style={{ height: '320px' }}>
                    <div
                      className="absolute top-0 left-0 origin-top-left"
                      style={{
                        transform: 'scale(0.6)',
                        width: '166.66%',
                        height: '166.66%',
                      }}
                    >
                      <iframe
                        src={GOLDEN_HOUR_URL}
                        title="Golden Hour Cleaning Co. website preview"
                        loading="lazy"
                        className="w-full h-full border-0"
                      />
                    </div>
                  </div>
                </div>

                <p className="px-6 py-3 text-xs text-stone-400">
                  This is a real, live project — not a mockup. I use the same process
                  and level of detail for every client site.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Process */}
        <Section id="process" title="How it works">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Quick intro & fit check',
                text: 'You share what you want your site to do and what’s not working now.',
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 text-violet-600"
                  >
                    <path
                      d="M21 6.5A2.5 2.5 0 0 0 18.5 4h-13A2.5 2.5 0 0 0 3 6.5v7A2.5 2.5 0 0 0 5.5 16H8l4 3.5L16 16h2.5A2.5 2.5 0 0 0 21 13.5v-7Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                step: '02',
                title: 'Simple plan & price',
                text: 'I recommend a clean build or rebuild with a clear scope and timeline.',
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 text-violet-600"
                  >
                    <path
                      d="M4 5h16M4 10h16M4 15h10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                step: '03',
                title: 'Design & build',
                text: 'Your site is built from scratch with clean code and thoughtful UX.',
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 text-violet-600"
                  >
                    <path
                      d="M4 20l4-1 11-11a1.5 1.5 0 0 0 0-2l-1.5-1.5a1.5 1.5 0 0 0-2 0L4.5 15.5 4 20Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                step: '04',
                title: 'Launch & handoff',
                text: 'I deploy your site and help connect your domain so it just works.',
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 text-violet-600"
                  >
                    <path
                      d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-violet-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md animate-fade-in-up"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 transition-transform duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>
                  <div className="text-xs font-semibold tracking-widest text-violet-600">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-stone-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-stone-600">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-violet-200 bg-violet-50 p-6 text-center">
            <p className="text-sm text-stone-700">
              No tech overwhelm. No endless revisions. Just a clean, easy build process
              from start to finish.
            </p>
          </div>
        </Section>

        {/* About */}
        <Section id="about" title="About Jasmin">
          <div className="grid gap-6 md:grid-cols-[1fr,1.5fr] items-center">
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-sm max-w-xs">
                <img
                  src={headshot}
                  alt="Headshot of Jasmin Miranda"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="text-sm text-stone-700 space-y-3">
              <p>
                <span className="font-semibold text-stone-900">
                  Hi, I&apos;m Jasmin.
                </span>{' '}
                I&apos;m a web engineer who builds clean, modern websites for
                small businesses and founders who want a fresh start online.
              </p>
              <p>
                By day, I work as a senior engineer at Nike on marketing
                experimentation and analytics systems for nike.com. On the side,
                I build custom websites from scratch—no templates, no patchwork,
                and no mystery tech.
              </p>
              <p>
                I care about clarity, structure, and making sure your site
                actually works for your business. My style is calm,
                collaborative, and practical—I&apos;ll explain things clearly
                and keep your build simple and solid.
              </p>
              <p>
                📍 I’m based in Portland, Oregon, and I work with small businesses around the world.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/jasminmirandab/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-stone-700 hover:text-violet-700 transition"
                  aria-label="Visit my LinkedIn profile"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100 transition">
                    <LinkedinIcon size={16} />
                  </span>
                  <span className="underline underline-offset-4">
                    Connect with me on LinkedIn
                  </span>
                </a>
              </div>

            </div>
          </div>
        </Section>

        {/* Intake form */}
        <Section id="intake" title="Start a new website project">
          <p className="mb-4 text-sm text-stone-600">
            Share a few details and I&apos;ll follow up with a simple next step.
            This form doesn&apos;t lock you into anything—it just starts the
            conversation.
          </p>
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm md:grid-cols-2"
          >
            <div className="md:col-span-1">
              <label className="block text-xs font-medium text-stone-700">
                Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 shadow-sm focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
                />
              </label>
            </div>
            <div className="md:col-span-1">
              <label className="block text-xs font-medium text-stone-700">
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 shadow-sm focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
                />
              </label>
            </div>
            <div className="md:col-span-1">
              <label className="block text-xs font-medium text-stone-700">
                Business name
                <input
                  type="text"
                  name="business"
                  value={form.business}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 shadow-sm focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
                />
              </label>
            </div>
            <div className="md:col-span-1">
              <label className="block text-xs font-medium text-stone-700">
                Current website (if any)
                <input
                  type="url"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 shadow-sm focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
                />
              </label>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-stone-700">
                What do you need built?
                <textarea
                  name="needs"
                  value={form.needs}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 shadow-sm focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
                  placeholder="New 3-page site, full rebuild of my current site, a focused page for a specific offer, etc."
                />
              </label>
            </div>
            <div className="md:col-span-1">
              <label className="block text-xs font-medium text-stone-700">
                Timeline
                <select
                  name="timeline"
                  value={form.timeline}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 shadow-sm focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
                >
                  <option value="">Select an option</option>
                  <option value="asap">ASAP (within ~2 weeks)</option>
                  <option value="this-month">This month</option>
                  <option value="flexible">I’m flexible</option>
                </select>
              </label>
            </div>
            <div className="md:col-span-1">
              <span className="block text-xs font-medium text-stone-700">
                Open to a full rebuild if that&apos;s best?
              </span>
              <div className="mt-1 flex gap-4 text-xs text-stone-700">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="openToRebuild"
                    value="yes"
                    checked={form.openToRebuild === 'yes'}
                    onChange={handleChange}
                    className="h-3 w-3 border-stone-300 text-stone-900 focus:ring-stone-500"
                  />
                  Yes
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="openToRebuild"
                    value="maybe"
                    checked={form.openToRebuild === 'maybe'}
                    onChange={handleChange}
                    className="h-3 w-3 border-stone-300 text-stone-900 focus:ring-stone-500"
                  />
                  Maybe
                </label>
              </div>
            </div>

            <div className="md:col-span-1">
              <label className="block text-xs font-medium text-stone-700">
                Approximate budget
                <div className="mt-1 flex items-center gap-2">
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 shadow-sm focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
                  >
                    <option value="">Select a range</option>
                    <option value="under-1500">Under $1,500</option>
                    <option value="1500-3000">$1,500–$3,000</option>
                    <option value="3000-5000">$3,000–$5,000</option>
                    <option value="5000-plus">$5,000+</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>

                  {/* Tooltip */}
                  <span className="group relative inline-flex items-center">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border border-stone-300 text-[10px] text-stone-500">
                      ?
                    </span>
                    <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 hidden w-56 -translate-x-1/2 rounded-md bg-stone-900 px-3 py-2 text-[11px] leading-snug text-stone-50 shadow-lg group-hover:block">
                      Most projects land between <span className="font-semibold">$1,500–$5,000</span>{' '}
                      depending on pages, copy support, and integrations.
                    </span>
                  </span>
                </div>
              </label>
            </div>

            <div className="md:col-span-2 flex flex-col gap-2 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-2.5 text-sm font-medium text-stone-50 hover:bg-stone-800"
              >
                Send project details
              </button>
              <p className="text-xs text-stone-500">
                This will open an email draft with your answers—no spam, no
                automated lists.
              </p>
            </div>
          </form>

          {CALENDLY_URL && (
            <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-4 text-sm text-stone-700 shadow-sm">
              <p>
                Prefer to talk it through first?{' '}
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-stone-900 underline underline-offset-2 hover:text-stone-700"
                >
                  Book a short intro call
                </a>{' '}
                instead.
              </p>
            </div>
          )}
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-violet-100 bg-white/80">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Websites by Jasmin</div>
          <div className="space-x-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-stone-700"
            >
              Email
            </a>
            {CALENDLY_URL && (
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-stone-700"
              >
                Book a call
              </a>
            )}
          </div>
        </div>
      </footer>

      {/* Fullscreen photo modal */}
      {photoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur"
          onClick={() => setPhotoOpen(false)}
        >
          <img
            src={headshot}
            alt="Jasmin Miranda"
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
