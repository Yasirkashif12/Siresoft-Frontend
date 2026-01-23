import React from 'react';
import {
  Header,
  Hero,
  SubscriptionPlans,
  ServicesPreview,
  WebsiteTemplates,
  WhySireSoft,
  AboutSnapshot,
  Footer
} from './components/sections';


/**
 * SireSoftLanding - Main App Component
 * Production-ready SaaS landing page with optimized components and structure
 */
export default function SireSoftLanding() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      <SubscriptionPlans />
      <ServicesPreview />
      <WebsiteTemplates />
      <WhySireSoft />
      <AboutSnapshot />
      <Footer />
    </div>
  );
}

