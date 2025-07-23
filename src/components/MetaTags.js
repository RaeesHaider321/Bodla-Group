// src/components/MetaTags.js
import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = ({ title, description, imageUrl, url }) => {
  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" /> {/* Or 'website' if not a specific article */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      {/* If your image requires specific dimensions */}
      {/* <meta property="og:image:width" content="1200" /> */}
      {/* <meta property="og:image:height" content="630" /> */}

      {/* Twitter Meta Tags (optional, but good practice) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {/* <meta name="twitter:site" content="@yourtwitterhandle" /> */}
    </Helmet>
  );
};

export default MetaTags;