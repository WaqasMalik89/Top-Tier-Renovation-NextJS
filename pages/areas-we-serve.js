// pages/areas-we-serve.js
import Head from 'next/head';

export default function AreasWeServe() {
  return (
    <>
      <Head>
        <title>Areas We Serve | Top Tier Renovation</title>
        <meta name="description" content="We proudly serve Toronto, Brampton, Mississauga, Milton, Guelph, Vaughan, and more GTA areas." />
      </Head>

      <main style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h1>Areas We Serve</h1>
        <p>
          We proudly serve homeowners and businesses throughout the Greater Toronto Area (GTA) and surrounding cities:
        </p>
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', listStyleType: 'none', padding: 0 }}>
          {[
            "Toronto", "Mississauga", "Brampton", "Milton",
            "Vaughan", "Markham", "Guelph", "Bradford",
            "Newmarket", "Barrie"
          ].map(city => (
            <li key={city} style={{ background: '#e6f7ff', padding: '10px 20px', borderRadius: '20px' }}>{city}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
