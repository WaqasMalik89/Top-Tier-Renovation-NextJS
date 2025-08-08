/**
 * Custom App component in Next.js.
 * 
 * This file allows you to:
 * - Import global CSS styles that apply to every page.
 * - Customize how pages are initialized (for example, to wrap them in layout components or provide global state).
 * 
 * Next.js uses this component to render every page in the app.
 * 
 * In this example, we are simply loading global styles and rendering the current page.
 */

// Import global CSS styles. These styles are applied to all pages in the application.
import '../styles/globals.css'; // General/global styles
import '../styles/uniform-portfolio-images.css'; // Specific styles for portfolio image layout

/**
 * Main App component that wraps around all page components.
 * 
 * @param {object} props
 * @param {Component} props.Component - The page component being rendered (e.g. index.js, about.js)
 * @param {object} props.pageProps - Props passed to the page component by Next.js (e.g. from getStaticProps or getServerSideProps)
 */
function MyApp({ Component, pageProps }) {
  // Render the current page with its props
  return <Component {...pageProps} />;
}

export default MyApp;

