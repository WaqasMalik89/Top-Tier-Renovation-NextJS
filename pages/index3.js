import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';  // Use Next.js Image component for optimized images

/**
 * Home Page Component - Top Tier Renovation Services
 *
 * This component renders the homepage for a landscaping and renovation service.
 * It implements multiple SEO optimizations for improved search engine visibility:
 *  - Proper <head> metadata including title, description, canonical URL, Open Graph, Twitter Cards
 *  - JSON-LD structured data for Local Business to improve rich results
 *  - Semantic HTML5 tags for clear content hierarchy and accessibility
 *  - Next.js Image component usage for optimized and lazy-loaded images
 *  - Dynamic background image carousel with smooth transitions
 *
 * Content includes service listings, portfolio images with alt attributes,
 * testimonials, contact form, and social media links.
 */

export default function Home() {
  // Array of background images for hero section carousel
  const backgroundImages = [
    '/images/UploadedImage0.jpg',
    '/images/UploadedImage1.jpg',
    '/images/UploadedImage3.jpg',
    '/images/UploadedImage4.jpg',
  ];

  // State to keep track of current background image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

   // Effect hook to cycle through background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Inline styles for hero section background and layout
  const heroStyle = {
    backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '60px 20px',
    textAlign: 'center',
    position: 'relative',
    transition: 'background-image 1s ease-in-out'
  };

  return (
    <>
      <Head>
        {/* Primary SEO Meta Tags */}
        <title>Top Tier Renovation Services | Landscaping in GTA</title>
        <meta name="description" content="Transform your outdoor space with premium landscaping and renovation services across GTA and nearby areas." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Top Tier Renovation Services | Landscaping in GTA" />
        <meta property="og:description" content="Transform your outdoor space with premium landscaping and renovation services across GTA and nearby areas." />
        <meta property="og:image" content="https://yourdomain.com/images/og-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com/" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Tier Renovation Services | Landscaping in GTA" />
        <meta name="twitter:description" content="Transform your outdoor space with premium landscaping and renovation services across GTA and nearby areas." />
        <meta name="twitter:image" content="https://yourdomain.com/images/og-image.jpg" />
    
        {/* Structured Data JSON-LD for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Top Tier Renovation Services",
              "image": "https://yourdomain.com/images/logo.png",
              "telephone": "(647) 299-9100",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Main Street",
                "addressLocality": "Toronto",
                "addressRegion": "ON",
                "postalCode": "M1M 1M1",
                "addressCountry": "CA"
              },
              "url": "https://yourdomain.com",
              "sameAs": [
                "https://www.facebook.com/yourprofile",
                "https://www.instagram.com/yourprofile",
                "https://www.linkedin.com/in/yourprofile"
              ]
            }),
          }}
        />
      </Head>

      <header className="hero" style={heroStyle}>
        <h1>Transform Your Outdoor Space</h1>
        <p>Premium Landscaping Services in GTA & Nearby Areas</p>
        <div className="cta-buttons">
          <a href="#contact" className="btn">Get a Free Quote</a>
          <a href="#portfolio" className="btn">View Our Projects</a>
        </div>
      </header>

      <main>
        <section id="services">
          <h2>Our Services</h2>
          <div className="service-grid">
            <article>Landscape Design</article>
            <article>Interlocking & Stonework</article>
            <article>Outdoor Lighting</article>
            <article>Garden Installation</article>
            <article>Sod & Turf</article>
            <article>Seasonal Maintenance</article>
          </div>
        </section>

        <section id="portfolio">
          <h2>Portfolio</h2>
          <div className="images">
            {/* Use Next.js Image with alt and optimized loading */}
            <Image
              src="/images/UploadedImage0.jpg"
              alt="Beautifully landscaped garden project 1"
              width={600}
              height={400}
              objectFit="cover"
              priority
            />
            <Image
              src="/images/UploadedImage1.jpg"
              alt="Beautifully landscaped garden project 2"
              width={600}
              height={400}
              objectFit="cover"
            />
            <Image
              src="/images/UploadedImage3.jpg"
              alt="Beautifully landscaped garden project 3"
              width={600}
              height={400}
              objectFit="cover"
            />
            <Image
              src="/images/UploadedImage4.jpg"
              alt="Beautifully landscaped garden project 4"
              width={600}
              height={400}
              objectFit="cover"
            />
          </div>
          <div style={{ borderTop: '2px solid #FFFF', margin: '20px 0' }}></div>
          <div className="images">
            <Image
              src="/images/UploadedImage5.jpg"
              alt="Beautifully landscaped garden project 5"
              width={600}
              height={400}
              objectFit="cover"
            />
            <Image
              src="/images/UploadedImage6.jpg"
              alt="Beautifully landscaped garden project 6"
              width={600}
              height={400}
              objectFit="cover"
            />
            <Image
              src="/images/UploadedImage7.jpg"
              alt="Beautifully landscaped garden project 7"
              width={600}
              height={400}
              objectFit="cover"
            />
            <Image
              src="/images/UploadedImage8.jpg"
              alt="Beautifully landscaped garden project 8"
              width={600}
              height={400}
              objectFit="cover"
            />
          </div>
        </section>

        <section id="testimonials">
          <h2>Testimonials</h2>
          <blockquote>“GreenScape transformed our backyard into a paradise. Highly recommended!” – Sarah M.</blockquote>
          <blockquote>“Professional, reliable, and creative landscaping team.” – John D.</blockquote>
        </section>

        <section id="contact">
          <h2>Contact Us</h2>
          <form action="#" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="tel" name="phone" placeholder="Phone Number" />
            <textarea name="message" placeholder="Tell us about your project..." required></textarea>
            <button type="submit">Send Message</button>
          </form>
          <p>Email: mail.waqas.malik@gmail.com | Phone: (647) 299-9100</p>
          <p>Serving Toronto, Brampton, Mississauga, Milton, Guelph, Vaughan, Bradford, Barrie, Newmarket and the GTA</p>
        </section>
      </main>

      <footer>
        <p>&copy; Top Tier Renovation Services. All rights reserved.</p>
        <div className="social-media">
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/instagram.png" alt="Instagram" width={24} height={24} />
          </a>
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/facebook.png" alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/youtube.png" alt="YouTube" width={24} height={24} />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/linkedin.png" alt="LinkedIn" width={24} height={24} />
          </a>
        </div>
      </footer>
    </>
  );
}
