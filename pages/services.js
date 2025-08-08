// pages/services.js
import Head from 'next/head';

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services | Top Tier Renovation</title>
        <meta name="description" content="Explore our landscaping services, from garden design to lighting and stonework in the Greater Toronto Area." />
      </Head>

      <main style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h1>Our Services</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '30px' }}>
          <div>
            <h3>Landscape Design</h3>
            <p>Custom landscape plans tailored to your home’s layout, lifestyle, and budget.</p>
          </div>
          <div>
            <h3>Interlocking & Stonework</h3>
            <p>Beautiful driveways, patios, and walkways using premium stone materials.</p>
          </div>
          <div>
            <h3>Outdoor Lighting</h3>
            <p>Enhance safety and aesthetics with professionally installed outdoor lighting.</p>
          </div>
          <div>
            <h3>Garden Installation</h3>
            <p>From flower beds to shrubbery, we design and install lush, vibrant gardens.</p>
          </div>
          <div>
            <h3>Sod & Turf</h3>
            <p>Get a greener, thicker lawn with quality sod installation and maintenance.</p>
          </div>
          <div>
            <h3>Seasonal Maintenance</h3>
            <p>Year-round lawn care, snow removal, trimming, and cleanup services.</p>
          </div>
        </div>
      </main>
    </>
  );
}
