import Head from "next/head";

export default function HeadMetaData() {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Stardelite - Elevate Your Ideas, Reach for the Stars"
      />
      <meta
        property="og:description"
        content="We are your partners in innovation, transforming visions into reality through cutting-edge technology and personalized solutions. Join our community of dreamers and achievers. Let's propel your business to new heights together!"
      />
      <meta property="og:image" content="URL_TO_YOUR_LOGO_OR_FEATURED_IMAGE" />
      <meta property="og:url" content="URL_TO_YOUR_WEBSITE" />
      <meta property="og:site_name" content="Stardelite" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Stardelite - Elevate Your Ideas, Reach for the Stars"
      />
      <meta
        name="twitter:description"
        content="We are your partners in innovation, transforming visions into reality through cutting-edge technology and personalized solutions. Join our community of dreamers and achievers. Let's propel your business to new heights together!"
      />
      <meta name="twitter:image" content="URL_TO_YOUR_LOGO_OR_FEATURED_IMAGE" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}
