import React from "react";

// Simple icon set
const Check = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden className={`w-5 h-5 ${props.className || ''}`}>
    <path fill="currentColor" d="M9.55 17.6 4.9 12.95l1.4-1.4 3.25 3.25 7.2-7.2 1.4 1.4-8.6 8.6Z"/>
  </svg>
);

const Star = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden className={`w-5 h-5 ${props.className || ''}`}>
    <path fill="currentColor" d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);

export default function Site() {
  return (
    <div className="font-sans text-slate-800 bg-white">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-2xl bg-sky-600 text-white font-bold">TB</span>
            <span className="text-lg font-semibold">Two Brothers Window Washing</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-sky-700">Services</a>
            <a href="#why" className="hover:text-sky-700">Why Us</a>
            <a href="#areas" className="hover:text-sky-700">Service Areas</a>
            <a href="#gallery" className="hover:text-sky-700">Gallery</a>
            <a href="#process" className="hover:text-sky-700">Process</a>
            <a href="#faq" className="hover:text-sky-700">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:+14355550137" className="hidden md:inline-block text-sm text-slate-600 hover:text-slate-900">Call: (435) 555‑0137</a>
            <a href="sms:+14355550137" className="hidden md:inline-flex items-center rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium hover:bg-slate-50">Text Us</a>
            <a href="#quote" className="inline-flex items-center rounded-xl bg-sky-600 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-sky-700">Get a Free Quote</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="absolute inset-0 bg-[url('sandbox:/mnt/data/2025-04-22.jpg')] bg-cover bg-center" aria-hidden></div>
        <div className="relative bg-black/40">
          <div className="max-w-6xl mx-auto px-4 py-24 md:py-32">
            <div className="max-w-2xl text-white">
              <p className="uppercase tracking-wide text-sm/loose mb-3">St. George • Washington County</p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Crystal‑clear windows. Friendly, local service.</h1>
              <p className="mt-4 text-white/90">Residential & commercial window cleaning, screen repair, hard‑water removal, and solar panel cleaning—done right and on time.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#quote" className="inline-flex items-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow hover:bg-slate-100">Request a Quote</a>
                <a href="#services" className="inline-flex items-center rounded-xl bg-sky-600 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-sky-700">See Services</a>
              </div>
              <div className="mt-6 flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (<Star key={i} />))}
                <span className="ml-2 text-white/90 text-sm">Top‑rated locally</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="mt-3 text-slate-600">Streak‑free results using professional tools and pure water systems. Choose a single service or bundle and save.</p>
            <ul className="mt-6 space-y-3">
              {["Residential & Commercial Window Cleaning","Solar Panel Cleaning","Screen Repair & Re‑screening","Hard‑Water & Mineral Removal","Tracks & Sills Detailing","Exterior Only or In & Out"].map((t) => (
                <li key={t} className="flex items-start gap-3"><Check className="text-sky-600 mt-1"/><span>{t}</span></li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#quote" className="inline-flex items-center rounded-xl bg-sky-600 px-5 py-3 text-white text-sm font-semibold shadow hover:bg-sky-700">Get Pricing</a>
              <a href="#faq" className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50">FAQs</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img className="rounded-2xl shadow object-cover h-48 w-full" src="https://images.unsplash.com/photo-1523419409543-a5e549cba1f1?q=80&w=2070&auto=format&fit=crop" alt="Window cleaning" />
            <img className="rounded-2xl shadow object-cover h-48 w-full" src="https://images.unsplash.com/photo-1581089781785-603411fa81e5?q=80&w=2069&auto=format&fit=crop" alt="Solar panels" />
            <img className="rounded-2xl shadow object-cover h-48 w-full" src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=2070&auto=format&fit=crop" alt="Squeegee" />
            <img className="rounded-2xl shadow object-cover h-48 w-full" src="https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=2048&auto=format&fit=crop" alt="Clean glass" />
          </div>
        </div>

        {/* Stats */}
        <div id="why" className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {label: "Years in business", value: "5+"},
            {label: "Five‑star reviews", value: "100+"},
            {label: "Windows cleaned", value: "25,000+"},
            {label: "Satisfaction", value: "100%"},
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-slate-200 p-6 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-sky-700">{s.value}</div>
              <div className="mt-1 text-sm text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Areas */}
      <section id="areas" className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Service Areas</h2>
          <p className="mt-2 text-slate-600">Proudly serving Washington County and nearby cities.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {["St. George","Santa Clara","Washington","Ivins","Hurricane","La Verkin"].map((city) => (
              <div key={city} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
                <h3 className="font-semibold">{city}</h3>
                <p className="mt-1 text-sm text-slate-600">Next‑day quotes and flexible scheduling.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Strip */}
      <section id="before-after" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">Before & After</h2>
            <p className="mt-2 text-slate-600">Real results from recent cleanings in St. George & Santa Clara.</p>
          </div>
          <a href="#quote" className="hidden md:inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50">Get a Free Estimate</a>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {[{src:"sandbox:/mnt/data/2024-08-05.webp", caption:"Light fixture glass — before vs after"},
            {src:"sandbox:/mnt/data/window pic 3.webp", caption:"Exterior window — before vs after"}].map((i,idx) => (
              <figure key={idx} className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                <img src={i.src} alt={i.caption} className="w-full h-72 object-cover"/>
                <figcaption className="px-4 py-3 text-sm text-slate-600">{i.caption}</figcaption>
              </figure>
            ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">Recent Work</h2>
            <p className="mt-2 text-slate-600">A few before/after shots from recent jobs.</p>
          </div>
          <a href="#quote" className="hidden md:inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50">Claim Free Quote</a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
          { src: "sandbox:/mnt/data/2024-08-05.webp", alt: "Outdoor lantern glass—before vs after clean" },
          { src: "sandbox:/mnt/data/window pic 3.webp", alt: "Residential window before/after reflection" },
          { src: "sandbox:/mnt/data/window pic 2.webp", alt: "Skylight panel with hard water spots removed" },
          { src: "sandbox:/mnt/data/2022-07-26.jpg", alt: "High interior windows on ladder—log cabin" },
          { src: "sandbox:/mnt/data/2025-04-22.jpg", alt: "Exterior window finished shine with ladder" },
        ].map((img, i) => (
            <img key={i} className="rounded-2xl shadow object-cover h-48 w-full" src={img.src} alt={img.alt} />
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            {[
              {title: "1) Quote", text: "Send your address & a few photos for fast pricing."},
              {title: "2) Schedule", text: "Pick a time that fits. We text ETAs & reminders."},
              {title: "3) Clean", text: "Pure water or traditional squeegee—whatever delivers best results."},
              {title: "4) Smile", text: "Walkthrough + rain guarantee so you’re covered."},
            ].map((s) => (
              <div key={s.title} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
                <div className="text-sky-700 font-bold">{s.title}</div>
                <p className="mt-2 text-sm text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">Reviews</h2>
            <p className="mt-2 text-slate-600">Local 5‑star service in Washington County.</p>
          </div>
          <a href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review" className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50">Leave a Google Review</a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {name: "Linda B.", text: "They were professional, careful, and my windows look amazing. Pricing was fair too."},
            {name: "Robert N.", text: "Great guys, on time, and the results were crystal clear. 10/10 would recommend."},
            {name: "Porter B.", text: "Removed a stubborn film other companies couldn’t. Worth every penny."},
          ].map((t) => (
            <figure key={t.name} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (<Star key={i} />))}
              </div>
              <blockquote className="mt-3 text-slate-700">{t.text}</blockquote>
              <figcaption className="mt-3 text-sm text-slate-500">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Quote form */}
      <section id="quote" className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold">Request a Free Quote</h2>
          <p className="mt-2 text-white/80">Tell us a bit about your property and we’ll reply with pricing and availability.</p>
          <form className="mt-8 grid md:grid-cols-2 gap-4">
            <input className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3" placeholder="Full name"/>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3" placeholder="Phone"/>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 md:col-span-2" placeholder="Email"/>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 md:col-span-2" placeholder="Service address"/>
            <textarea className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 md:col-span-2" rows={4} placeholder="Tell us what you need (ex. in/out windows, screens, solar panels)"></textarea>
            <div className="md:col-span-2 flex flex-wrap gap-3">
            <button type="button" className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold shadow hover:bg-sky-700">Send Request</button>
            <a href="https://calendly.com/your-link/windows" className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50">Book Online</a>
            </div>
          </form>
          <p className="mt-4 text-xs text-white/60">By sending this request you agree to our standard terms and privacy policy.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold">FAQ</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[{
            q: "How often should I clean my windows?",
            a: "Most homes are 2–4×/year. Love lots of natural light? Consider monthly or bi‑monthly exteriors."
          },{
            q: "Do I need to be home?",
            a: "Nope. We can text you updates and photos. We just need access to the yard and a working exterior spigot for pure‑water work."
          },{
            q: "What if it rains?",
            a: "We include a rain guarantee—if rain affects the work within 14 days, we’ll touch up the affected panes."
          },{
            q: "Do you handle hard‑water spots?",
            a: "Yes. We use professional acids/polishes as needed and protect surrounding surfaces."
          }].map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
              <div className="font-semibold">{item.q}</div>
              <p className="mt-2 text-sm text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-2xl bg-sky-600 text-white font-bold">TB</span>
              <span className="font-semibold">Two Brothers Window Washing</span>
            </div>
            <p className="mt-3 text-sm text-white/80">St. George • Santa Clara • Washington • Ivins • Hurricane • La Verkin</p>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <ul className="mt-3 space-y-1 text-sm text-white/80">
              <li>Phone: (435) 555‑0137</li>
              <li>Email: hello@twobrothers.example</li>
              <li>Hours: Mon–Sat 8a–6p</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Links</div>
            <ul className="mt-3 space-y-1 text-sm text-white/80">
              <li><a href="#quote" className="hover:underline">Get a Quote</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-white/60">© {new Date().getFullYear()} Two Brothers Window Washing. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
