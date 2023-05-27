import Head from "next/head";

import Homepage from "./home";

export default function Home() {
  return (
    <>
      <Head>
        <title>QRint</title>
        <meta name="description" content="QR-Code Generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Rana Intizar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Homepage />
      </main>
    </>
  );
}
