import { COMPANY_INFO } from '@/lib/company'

export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': COMPANY_INFO.brandName,
    'legalName': COMPANY_INFO.legalName,
    'description': 'We build custom software, AI-driven solutions, and cloud integrations that drive growth and efficiency.',
    'url': COMPANY_INFO.website,
    'logo': `${COMPANY_INFO.website}/logo.png`,
    'identifier': {
      '@type': 'PropertyValue',
      'name': 'RCCM',
      'value': COMPANY_INFO.rccm,
    },
    'contactPoint': [
      {
        '@type': 'ContactPoint',
        'telephone': COMPANY_INFO.phone,
        'contactType': 'customer service',
        'areaServed': 'CM',
        'availableLanguage': ['English', 'French'],
      },
    ],
    'address': [
      {
        '@type': 'PostalAddress',
        'streetAddress': 'BP 8650, Makepe Rhone Poulenc',
        'addressLocality': 'Douala',
        'addressRegion': 'Littoral',
        'postalCode': '8650',
        'addressCountry': 'CM',
      },
    ],
    'sameAs': [
      'https://github.com/pokygroup',
      'https://linkedin.com/company/pokygroup',
      'https://twitter.com/pokygroup',
    ],
    'foundingDate': '2024',
    'numberOfEmployees': '5-10',
    'industry': 'Software Development',
    'services': [
      'Custom Software Development',
      'AI Solutions',
      'Cloud Integration',
      'Business Automation',
      'Web Development',
      'Mobile App Development',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': COMPANY_INFO.brandName,
    'url': COMPANY_INFO.website,
    'description': 'Innovative solutions for modern business. Custom software, AI solutions, and cloud integrations.',
    'publisher': {
      '@type': 'Organization',
      'name': COMPANY_INFO.brandName,
    },
    'potentialAction': {
      '@type': 'SearchAction',
      'target': `${COMPANY_INFO.website}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Software Development Services',
    'description': 'Custom software development, AI solutions, cloud integration, and business automation services.',
    'provider': {
      '@type': 'Organization',
      'name': COMPANY_INFO.brandName,
    },
    'serviceType': 'Software Development',
    'areaServed': ['Cameroon', 'Worldwide'],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Software Development Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Custom Software Development',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'AI Solutions',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Cloud Integration',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Business Automation',
          },
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  )
}
