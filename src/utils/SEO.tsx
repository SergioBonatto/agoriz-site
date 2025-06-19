import { type FC } from 'react';
import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
}

export const SEO: FC<SEOProps> = ({
  title = 'Agoriz - Enterprise Web3 Payment Infrastructure | Crypto Payment Solutions',
  description = 'Transform your business with enterprise-grade Web3 payment infrastructure. Accept crypto payments with low fees, instant settlement, and plug-and-play integration. Battle-tested smart contracts for secure transactions.',
  keywords = 'web3 payment infrastructure, crypto payment processor, blockchain payment solutions, enterprise cryptocurrency payments, smart contract payments, DeFi payment gateway, crypto merchant services, Web3 payment API',
  image = './images/brand/agoriz.png',
  url = '/',
  type = 'website',
  twitterCard = 'summary_large_image'
}) => {
  const baseUrl = 'https://agoriz.vercel.app';
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

  useEffect(() => {
    // Primary Meta Tags
    document.title = title;
    updateMetaTag('title', title);
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Canonical URL
    updateLinkTag('canonical', fullUrl);

    // Open Graph
    updateMetaTag('og:type', type);
    updateMetaTag('og:url', fullUrl);
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', fullImage);
    updateMetaTag('og:site_name', 'Agoriz');

    // Twitter
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:url', fullUrl);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', fullImage);

    // Additional Tags
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'English');
    updateMetaTag('author', 'Agoriz');
    updateMetaTag('geo.region', 'US');
    updateMetaTag('geo.placename', 'Global');

    // Structured Data
    updateStructuredData();
  }, [title, description, keywords, image, url, type, twitterCard]);

  const updateMetaTag = (name: string, content: string) => {
    let element = document.querySelector(`meta[name="${name}"]`) ||
                 document.querySelector(`meta[property="${name}"]`);

    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(name.includes('og:') ? 'property' : 'name', name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  const updateLinkTag = (rel: string, href: string) => {
    let element = document.querySelector(`link[rel="${rel}"]`);

    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', rel);
      document.head.appendChild(element);
    }
    element.setAttribute('href', href);
  };

  const updateStructuredData = () => {
    const structuredDataOrg = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Agoriz',
      description: 'Enterprise-grade Web3 payment infrastructure for businesses',
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      sameAs: [
        'https://twitter.com/agorizbot',
        'https://linkedin.com/company/agoriz',
        'https://github.com/sergiobonatto'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        email: 'agoriz@proton.me'
      },
      foundingDate: '2025',
      industry: 'Financial Technology',
      keywords: 'Web3 payments, cryptocurrency payments, blockchain infrastructure, DeFi payments'
    };

    const structuredDataApp = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Agoriz Payment Infrastructure',
      description: 'Enterprise-grade Web3 payment infrastructure with smart contract security and instant settlement',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web-based',
      offers: {
        '@type': 'Offer',
        price: '0.5',
        priceCurrency: 'USD',
        description: 'Transaction fee percentage'
      },
      featureList: [
        'Instant Settlement',
        'Multi-signature Security',
        'REST API Integration',
        'Smart Contract Escrow',
        'Real-time Monitoring'
      ]
    };

    let scriptOrg = document.querySelector('script[data-type="organization"]');
    let scriptApp = document.querySelector('script[data-type="application"]');

    if (!scriptOrg) {
      scriptOrg = document.createElement('script');
      scriptOrg.setAttribute('type', 'application/ld+json');
      scriptOrg.setAttribute('data-type', 'organization');
      document.head.appendChild(scriptOrg);
    }

    if (!scriptApp) {
      scriptApp = document.createElement('script');
      scriptApp.setAttribute('type', 'application/ld+json');
      scriptApp.setAttribute('data-type', 'application');
      document.head.appendChild(scriptApp);
    }

    scriptOrg.textContent = JSON.stringify(structuredDataOrg);
    scriptApp.textContent = JSON.stringify(structuredDataApp);
  };

  return null;
};
