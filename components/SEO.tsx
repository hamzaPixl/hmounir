import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  twitterImage?: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Hamza Mounir | Senior Software Engineer - Brussels',
  description = 'Senior Software Engineer specializing in scalable systems, cloud architecture, AI systems, and technical leadership. Based in Brussels, Belgium.',
  keywords = 'software engineer, cloud architecture, AI systems, scalable platforms, TypeScript, Python, React, Next.js, microservices, Brussels, Belgium',
  ogImage = 'https://hmounir.com/og-image.jpg',
  twitterImage = 'https://hmounir.com/twitter-image.jpg',
  canonicalUrl = 'https://hmounir.com/',
}) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Hamza Mounir',
    jobTitle: 'Senior Software Engineer',
    url: 'https://hmounir.com',
    email: 'hamza@pixldev.be',
    telephone: '+32488203567',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Brussels',
      addressCountry: 'BE',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Pixl SRL',
      url: 'https://www.pixldev.be',
      taxID: 'BE 0805.449.693',
    },
    sameAs: [
      'https://github.com/hamzaPixl',
      'https://www.linkedin.com/in/hamza-mounir-0a7bb6139/',
      'https://www.pixldev.be',
    ],
    knowsAbout: [
      'Software Architecture',
      'Cloud Computing',
      'AI Systems',
      'TypeScript',
      'Python',
      'React',
      'Next.js',
      'Microservices',
    ],
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Hamza Mounir" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Hamza Mounir" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterImage} />

      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" href="/favicon.ico" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
};

export default SEO;
