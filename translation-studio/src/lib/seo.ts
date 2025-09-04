import type { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function generateSEO({
  title = "Студия переводов | Профессиональный перевод сериалов и фильмов",
  description = "Профессиональная студия переводов сериалов и фильмов. Качественные переводы с субтитрами и озвучкой. Быстрые сроки, доступные цены.",
  keywords = "перевод сериалов, перевод фильмов, субтитры, дубляж, озвучка, студия переводов",
  image = "/og-image.jpg",
  url = "https://translation-studio.com",
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    keywords,
    authors: [{ name: "Студия переводов" }],
    creator: "Студия переводов",
    publisher: "Студия переводов",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Студия переводов",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "google-site-verification-code",
      yandex: "yandex-verification-code",
    },
  };
}
