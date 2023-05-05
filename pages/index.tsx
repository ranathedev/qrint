import Head from "next/head";

import Header from "components/header";
import Sidebar from "components/sidebar";
import SidebarItem from "components/sidebar-item";

export default function Home() {
  return (
    <>
      <Head>
        <title>QRzar</title>
        <meta name="description" content="QR-Code Generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Rana Intizar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <SidebarItem /> */}
        {/* <Sidebar /> */}
        <Header />
      </main>
    </>
  );
}
