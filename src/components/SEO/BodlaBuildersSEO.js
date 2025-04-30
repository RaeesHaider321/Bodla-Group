import React from 'react';
import { Helmet } from 'react-helmet';

const BASE_URL = "https://bodlagroup.com";

const BodlaBuildersSEO = ({ 
  title = "Bodla Group | DHA Multan's Premier Real Estate Developers",
  description = "Bodla Group is Multan's leading real estate developer specializing in DHA Multan projects.",
  keywords = "Bodla Group, DHA Multan, real estate Multan",
  canonical = `${BASE_URL}/`,
  ogImage = `${BASE_URL}/images/og-default.png`,
  schemaMarkup = null
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Favicon */}
      <link rel="icon" href={`${BASE_URL}/favicon.ico`} />
      <link rel="apple-touch-icon" href={`${BASE_URL}/images/apple-touch-icon.png`} />

      {/* Schema.org JSON-LD */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

export default BodlaBuildersSEO;