import React from 'react';
import { Helmet } from 'react-helmet';

const BASE_URL = "https://bodlagroup.com";

const BodlaBuildersSEO = ({
  title = "Bodla Group | DHA Multan's Premier Real Estate Developers",
  description = "Bodla Group is Multan's leading real estate developer specializing in residential and commercial plots in DHA Multan. Authorized real estate consultants for secure investments.",
  keywords = `
    Bodla Group, DHA Multan, DHA Plots for Sale, DHA Multan Authorized Dealer, Real Estate Multan, Bodla Builders,
  Commercial Plots DHA, Residential Plots Multan, Buy Plot DHA Multan, DHA Multan Booking, Property Dealer Multan,
  Real Estate Developers Pakistan, real estate Multan, property for sale DHA Multan, buy property in Multan,
  ready shops for sale DHA Multan, commercial shop for bank DHA, business hub DHA Multan, office space DHA Multan,
  shop for brands in Multan, showroom DHA Multan, real estate for business setup, business shop DHA Multan,
  luxury villas DHA Multan, small house DHA Multan, affordable home DHA Multan, ready home for sale DHA Multan,
  5 marla house DHA, 5.2 marla house Multan, 8 marla house DHA, 10 marla house Multan, 1 kanal house Multan,
  modern home Multan, invest in DHA Multan, franchise outlet DHA Multan, brand shop Multan, shop for rent DHA Multan,
  ready to move home DHA, corner shop for sale DHA Multan, best real estate company Multan, plots for investment Multan,
  business opportunity DHA Multan, ready to move shops DHA Multan, showrooms for banks and brands,
  trusted real estate agency DHA Multan, best property deals DHA, investment shops DHA, commercial plaza DHA Multan
`.replace(/\s+/g, ' ').trim(), // cleaned-up white spaces
  canonical = `${BASE_URL}/`,
  ogImage = `${BASE_URL}/images/og-default.png`,
  schemaMarkup = null
}) => {
  // Default Schema if none passed
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bodla Group",
    "url": BASE_URL,
    "logo": `${BASE_URL}/images/logo.png`,
    "sameAs": [
      "https://www.facebook.com/BodlaBuilders/",
      "https://www.instagram.com/bodlagroup/",
      "https://www.linkedin.com/company/bodla-builders"
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Additional Meta */}
      <meta name="author" content="Bodla Group" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="theme-color" content="#004aad" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Bodla Group" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bodlagroup" />
      <meta name="twitter:creator" content="@bodlagroup" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Icons */}
      <link rel="icon" href={`${BASE_URL}/favicon.ico`} />
      <link rel="apple-touch-icon" href={`${BASE_URL}/images/apple-touch-icon.png`} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup || defaultSchema)}
      </script>
    </Helmet>
  );
};

export default BodlaBuildersSEO;
