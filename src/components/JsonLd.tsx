import { siteConfig } from "@/config/site";

/** 검색엔진용 조직 정보 (schema.org Organization) */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: [siteConfig.nameEn, "테라닉스"],
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo/theranics-symbol.png`,
    email: siteConfig.contact.email,
    telephone: `+82-${siteConfig.contact.tel.replace(/^0/, "")}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "배꽃길 63, 3동 1034호 (민락동, 더리브센텀스퀘어Ⅲ 지식산업센터)",
      addressLocality: "의정부시",
      addressRegion: "경기도",
      postalCode: "11815",
      addressCountry: "KR",
    },
    brand: { "@type": "Brand", name: "MYLIFT" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
