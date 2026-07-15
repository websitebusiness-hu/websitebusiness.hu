interface ServiceStructuredDataInput {
  name: string;
  description: string;
  path: string;
  serviceTypes: string[];
  faq: Array<{ question: string; answer: string }>;
  breadcrumb: string;
}

const siteUrl = 'https://websitebusiness.hu';

export const createServiceStructuredData = ({
  name,
  description,
  path,
  serviceTypes,
  faq,
  breadcrumb,
}: ServiceStructuredDataInput) => {
  const url = `${siteUrl}${path}`;
  const serviceId = `${url}#service`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: 'hu-HU',
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': serviceId },
      },
      {
        '@type': 'Service',
        '@id': serviceId,
        name,
        description,
        serviceType: serviceTypes,
        url,
        areaServed: { '@type': 'Country', name: 'Magyarország' },
        provider: { '@id': `${siteUrl}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'WebsiteBusiness',
            item: `${siteUrl}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: breadcrumb,
            item: url,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  };
};
