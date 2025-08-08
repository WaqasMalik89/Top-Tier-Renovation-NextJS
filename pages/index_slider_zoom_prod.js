/**
 * Home page component for a landscaping website built using Next.js.
 * 
 * This component renders:
 * - A rotating hero section with multiple background images.
 * - Descriptive sections for services, portfolio, testimonials, and contact form.
 * - External script and metadata for SEO.
 * 
 * Technologies used:
 * - React (JSX)
 * - Next.js features (Head, Script)
 * - CSS via class names (likely defined in global stylesheet)
 * - Auto image rotation using useEffect and useState
 */

import { useEffect, useState } from 'react'; // React hooks to manage state and lifecycle
import Head from 'next/head';               // Allows you to add custom <head> tags for SEO and metadata
import Script from 'next/script';           // Lets you load external JS scripts in a safe way

// This is the main homepage component
export default function Home() {
  /**
   * Array of image URLs used for the hero background.
   * These should point to images located in your /public/images directory.
   */
  const backgroundImages = [
    '/images/UploadedImage0.jpg',
    '/images/UploadedImage1.jpg',
    '/images/UploadedImage3.jpg',
    '/images/UploadedImage4.jpg',
  ];

  /**
   * State to keep track of which image is currently shown as the hero background.
   * Starts at index 0 (first image in the array).
   */
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  /**
   * Automatically rotate hero background images every 5 seconds.
   * useEffect runs once after the component mounts.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      // Change to next image in the array, looping back to the start
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Time in milliseconds (5000 = 5 seconds)

    // Clean up the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(interval);
  }, []);

  /**
   * This object contains all the styles for the hero section, applied inline.
   * It updates dynamically whenever the image index changes.
   */
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
      {/* Metadata for browser tab and SEO */}
      <Head>
        <title>Top Tier Renovation Services</title>
        <meta name="description" content="Premium Landscaping Services in GTA & Nearby Areas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section with rotating background image */}
      <header className="hero" style={heroStyle}>
        <h1>Transform Your Outdoor Space</h1>
        <p>Premium Landscaping Services in GTA & Nearby Areas</p>
        <div className="cta-buttons">
          <a href="#contact" className="btn">Get a Free Quote</a>
          <a href="#portfolio" className="btn">View Our Projects</a>
        </div>
      </header>

      {/* Services section */}
      <section id="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div>Landscape Design</div>
          <div>Interlocking & Stonework</div>
          <div>Outdoor Lighting</div>
          <div>Garden Installation</div>
          <div>Sod & Turf</div>
          <div>Seasonal Maintenance</div>
        </div>
      </section>

      {/* Portfolio section showing completed projects */}
      <section id="portfolio">
        <h2>Portfolio</h2>
        <div className="images">
          <img src="/images/UploadedImage0.jpg" alt="Project 1" />
          <img src="/images/UploadedImage1.jpg" alt="Project 2" />
          <img src="/images/UploadedImage3.jpg" alt="Project 3" />
          <img src="/images/UploadedImage4.jpg" alt="Project 4" />
        </div>

        {/* Divider line */}
        <div style={{ borderTop: '2px solid #FFFF', margin: '20px 0' }}></div>

        {/* Second row of portfolio images */}
        <div className="images">
          <img src="/images/UploadedImage5.jpg" alt="Project 5" />
          <img src="/images/UploadedImage6.jpg" alt="Project 6" />
          <img src="/images/UploadedImage7.jpg" alt="Project 7" />
          <img src="/images/UploadedImage8.jpg" alt="Project 8" />
        </div>
      </section>

      {/* Testimonials from happy customers */}
      <section id="testimonials">
        <h2>Testimonials</h2>
        <blockquote>“GreenScape transformed our backyard into a paradise. Highly recommended!” – Sarah M.</blockquote>
        <blockquote>“Professional, reliable, and creative landscaping team.” – John D.</blockquote>
      </section>

      {/* Contact form to collect inquiries */}
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

      {/* Footer with social media icons */}
      <footer>
        <p>&copy; Top Tier Renovation Services. All rights reserved.</p>
        <div className="social-media">
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
            <img src="/icons/youtube.png" alt="YouTube" />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </footer>

      {/* External script loaded after everything else */}
      <Script src="/js/script.js" strategy="afterInteractive" />
    </>
  );
}
