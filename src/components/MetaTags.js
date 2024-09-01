import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = ({ title, description, keywords }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
  </Helmet>
);

export default MetaTags;