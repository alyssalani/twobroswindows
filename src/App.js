import React, { useState } from 'react';

export default function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fff' }}>
      <header style={{ backgroundColor: '#003058', color: 'white', padding: '1rem', textAlign: 'center' }}>
        <h1>Two Brothers Window Washing</h1>
        <p>Call us today: (555) 123-4567</p>
      </header>

      <section style={{ padding: '2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#003058' }}>Our Services</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>Residential Window Cleaning</li>
          <li>Commercial Window Cleaning</li>
          <li>Gutter Cleaning</li>
          <li>Pressure Washing</li>
        </ul>
      </section>

      <section style={{ padding: '2rem', backgroundColor: '#ECC16A' }}>
        <h2 style={{ textAlign: 'center' }}>Get a Free Quote</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required style={{ width: '100%', margin: '0.5rem 0', padding: '0.5rem' }} />
          <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required style={{ width: '100%', margin: '0.5rem 0', padding: '0.5rem' }} />
          <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required style={{ width: '100%', margin: '0.5rem 0', padding: '0.5rem' }} />
          <button type="submit" style={{ backgroundColor: '#003058', color: 'white', border: 'none', padding: '0.75rem 1rem', cursor: 'pointer' }}>Submit</button>
        </form>
      </section>

      <section style={{ padding: '2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#003058' }}>Customer Reviews</h2>
        <blockquote>"Excellent service and sparkling windows!" - Sarah J.</blockquote>
        <blockquote>"Professional, affordable, and reliable." - Mark T.</blockquote>
      </section>

      <footer style={{ backgroundColor: '#003058', color: 'white', textAlign: 'center', padding: '1rem' }}>
        <p>&copy; {new Date().getFullYear()} Two Brothers Window Washing</p>
      </footer>
    </div>
  );
}