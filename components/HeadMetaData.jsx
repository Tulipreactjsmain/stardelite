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
      <meta property="og:image" content="/coverImage.webp" />
      <meta property="og:url" content="https://stardelitesolutions.com/" />
      <meta property="og:site_name" content="Stardelite" />
      <meta name="twitter:card" content="/coverImage.webp" />
      <meta
        name="twitter:title"
        content="Stardelite - Elevate Your Ideas, Reach for the Stars"
      />
      <meta
        name="twitter:description"
        content="We are your partners in innovation, transforming visions into reality through cutting-edge technology and personalized solutions. Join our community of dreamers and achievers. Let's propel your business to new heights together!"
      />
      <meta name="twitter:image" content="/coverImage.webp" />
      
      <link rel="icon" type="image/x-icon" href="/iconJPEG.ico" />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/iconJPEG.ico"
      />
    </Head>
  );
}
