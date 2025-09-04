export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://translation-studio.com/#organization",
        name: "Студия переводов",
        url: "https://translation-studio.com",
        sameAs: [
          "https://facebook.com/translationstudio",
          "https://instagram.com/translation_studio",
          "https://t.me/translation_studio",
        ],
        logo: {
          "@type": "ImageObject",
          url: "https://translation-studio.com/logo.png",
          width: 200,
          height: 200,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+7-xxx-xxx-xx-xx",
          contactType: "customer service",
          areaServed: "RU",
          availableLanguage: "Russian",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "ул. Примерная, д. 123, офис 456",
          addressLocality: "Москва",
          addressCountry: "RU",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://translation-studio.com/#website",
        url: "https://translation-studio.com",
        name: "Студия переводов",
        description: "Профессиональная студия переводов сериалов и фильмов",
        publisher: {
          "@id": "https://translation-studio.com/#organization",
        },
        inLanguage: "ru-RU",
      },
      {
        "@type": "Service",
        "@id": "https://translation-studio.com/#services",
        name: "Перевод сериалов и фильмов",
        description:
          "Профессиональные услуги по переводу, субтитрированию и дублированию видеоконтента",
        provider: {
          "@id": "https://translation-studio.com/#organization",
        },
        serviceType: ["Перевод с субтитрами", "Дубляж и озвучка"],
        areaServed: "RU",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Услуги перевода",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Перевод с субтитрами",
                description:
                  "Создание качественных субтитров с точным переводом и синхронизацией",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Дубляж и озвучка",
                description:
                  "Профессиональная озвучка фильмов и сериалов с качественным дублированием",
              },
            },
          ],
        },
      },
    ],
  };
}

export function StructuredData() {
  const structuredData = generateStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
