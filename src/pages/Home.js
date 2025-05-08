import React from 'react';
import NewsTicker from "../components/NewsTicker";
import Slider from "../components/Slider";
import TrustedAdvisors from '../components/TrustedAdvisors';
import AboutHomejs from '../components/AboutHome';
import HistoryTimeline from '../components/HistoryTimeline';
import HomeServices from '../components/HomeServices';
import UtilitiesList from '../components/UtilitiesList';
import HomeProjects from '../components/HomeProjects';
import BodlaUpdates from '../components/BodlaUpdates';
import PromotionalSlider from '../components/PromotionalSlider';
import Testimonial from '../components/Testimonial';
import BodlaBuildersSEO from '../components/SEO/BodlaBuildersSEO';
const Home = () => {
  const SITE_URL = "https://bodlagroup.com";
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bodla Group",
    "url": `${SITE_URL}/`,
    "logo": `${SITE_URL}/images/bodlaGroupLogo.jpg`,
    "sameAs": [
      "https://www.facebook.com/bbdha",
      "https://www.instagram.com/bodlabuilders_/?igsh=MXZicWJqdXBwdmRjdQ%3D%3D#",
      "https://www.threads.net/@bodlabuilders",
      "https://x.com/bodlabuilders?t=1LdHjC9mBQ3hAVCZ3ARasg&s=08",
      "https://www.linkedin.com/company/bodla-group/",
      "://www.tiktok.com/@bodlabuilders?_t=8qpaMSiFS5Z&_r=1",
      "https://www.youtube.com/@BodlaBuilders",
      "https://wa.me/+923041231234",
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Business Hub, DHA Multan",
      "addressLocality": "Multan",
      "addressRegion": "Punjab",
      "postalCode": "60000",
      "addressCountry": "PK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+923041231234",
      "contactType": "sales"
    }
  };
  return (
    <>
    <BodlaBuildersSEO
        title="Bodla Group | DHA Multan's Trusted Real Estate Developers"
        description="Premium real estate development in DHA Multan by Bodla Group."
        keywords="Bodla Group, DHA Multan, real estate Multan, best builders in Multan"
        canonical={`${SITE_URL}/`}
        ogImage={`${SITE_URL}/images/og-home.jpg`} // Absolute URL
        schemaMarkup={schemaMarkup}
      />
      <div data-aos="fade-up" data-aos-duration="1000">
        <NewsTicker />
      </div>
      <div data-aos="fade-up" data-aos-duration="1300">
        <Slider />
      </div>
      <div data-aos="fade-up" data-aos-duration="1600">
        <TrustedAdvisors />
      </div>
      <div data-aos="fade-up" data-aos-duration="1900">
        <AboutHomejs />
      </div>
      <div data-aos="fade-up" data-aos-duration="2100">
        <HistoryTimeline />
      </div>
      <div data-aos="fade-up" data-aos-duration="2400">
        <HomeServices />
      </div>
      <div data-aos="fade-up" data-aos-duration="2700">
        <HomeProjects />
      </div>
      <div data-aos="fade-up" data-aos-duration="3000">
        <UtilitiesList />
      </div>
      <div data-aos="fade-up" data-aos-duration="3300">
        <BodlaUpdates />
      </div>
      <div data-aos="fade-up" data-aos-duration="3600">
        <PromotionalSlider />
      </div>
      <div data-aos="fade-up" data-aos-duration="3900">
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
