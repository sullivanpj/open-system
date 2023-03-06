import { NextSeo } from "next-seo";
import { NEXT_SEO_DEFAULT } from "../next-seo.config";

export default function Head() {
  return (
    <>
      <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={true} />
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
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}