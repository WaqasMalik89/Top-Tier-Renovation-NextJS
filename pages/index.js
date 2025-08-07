import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Head>
        <title>Top Tier Renovation Services</title>
        <meta name="description" content="Premium Landscaping Services in GTA & Nearby Areas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="hero">
        <h1 >Transform Your Outdoor Space</h1>
        <p >Premium Landscaping Services in GTA & Nearby Areas</p>
        <div className="cta-buttons">
          <a href="#contact" className="btn">Get a Free Quote</a>
          <a href="#portfolio" className="btn">View Our Projects</a>
        </div>
      </header>

      <section id="services">
        <h2 >Our Services</h2>
        <div className="service-grid">
          <div >Landscape Design</div>
          <div >Interlocking & Stonework</div>
          <div >Outdoor Lighting</div>
          <div >Garden Installation</div>
          <div >Sod & Turf</div>
          <div >Seasonal Maintenance</div>
        </div>
      </section>

      <section id="portfolio">
        <h2 >Portfolio</h2>
        <div className="images">
        <img src="/images/UploadedImage0.jpg" alt="Project 1"/>
        <img src="/images/UploadedImage1.jpg" alt="Project 2"/>
          <img src="/images/UploadedImage3.jpg" alt="Project 3"/>
          <img src="/images/UploadedImage4.jpg" alt="Project 4"/>
        </div>
        
        <div style={{ borderTop: '2px solid #FFFF', margin: '20px 0' }}></div>
        <div className="images">
          <img src="/images/UploadedImage5.jpg" alt="Project 5"/>
          <img src="/images/UploadedImage6.jpg" alt="Project 6"/>
          <img src="/images/UploadedImage7.jpg" alt="Project 7"/>
          <img src="/images/UploadedImage8.jpg" alt="Project 8"/>
        </div>
      </section>

      <section id="testimonials">
        <h2 >Testimonials</h2>
        <blockquote >“GreenScape transformed our backyard into a paradise. Highly recommended!” – Sarah M.</blockquote>
        <blockquote >“Professional, reliable, and creative landscaping team.” – John D.</blockquote>
      </section>

      <section id="contact">
        <h2 >Contact Us</h2>
        <form action="#" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="tel" name="phone" placeholder="Phone Number" />
          <textarea name="message" placeholder="Tell us about your project..." required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <p>Email: mail.waqas.malik@gmail.com | Phone: (647) 299-9100</p>
        <p>Serving Toronto, Brampton, Mississauga, Milton, Guelph, Vaughan, Brabdford, Barrie, Newmarket and the GTA</p>
      </section>

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
<Script src="/js/script.js" />
    </>
  )
}
