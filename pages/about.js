// pages/about.js
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Top Tier Renovation Services</title>
        <meta name="description" content="Learn more about Top Tier Renovation Services and our mission to transform outdoor spaces across the GTA." />
      </Head>

      <main style={{padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h1>About Us</h1>
        <p>
          At Top Tier Renovation Services, we specialize in transforming outdoor spaces into beautiful, functional environments. 
          With years of experience in landscaping, hardscaping, and garden installations, our mission is to deliver quality craftsmanship with exceptional customer service.
        </p>
        <p>
          Whether it's a backyard makeover, a new patio, or seasonal maintenance, our team brings passion, precision, and professionalism to every project across the GTA.
        </p>
      </main>
    </>
  );
}
