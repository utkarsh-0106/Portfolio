import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
}

const SITE = 'https://utkarsh0106.dev';
const DEFAULT_IMAGE = `${SITE}/og-image.png`;

export function Seo({
  title,
  description,
  path = '',
  image,
  imageAlt = 'Utkarsh Maheshwari portfolio',
  noindex = false,
}: SeoProps) {
  const url = `${SITE}${path}`;
  const fullTitle = `${title} — Utkarsh Maheshwari`;
  const img = image || DEFAULT_IMAGE;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Utkarsh Maheshwari" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:image:alt" content={imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@utkarsh_mah0106" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Helmet>
  );
}
