import Head from "next/head";

import Header from "components/header";
import Sidebar from "components/sidebar";
import SidebarItem from "components/sidebar-item";
import Customizer from "components/customizer";
import Dropdown from "components/dropdown";
import Button from "components/button";
import Dropbox from "components/dropbox";
import Scanner from "components/scanner";
import InputContainer from "components/input-container";
import CustomForm from "components/form";
import FileUploader from "components/fileUploader";

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
        {/* <Header /> */}
        {/* <Dropdown /> */}
        {/* <Customizer /> */}
        {/* <Button /> */}
        {/* <Dropbox /> */}
        {/* <Scanner /> */}
        {/* <InputContainer /> */}
        {/* <CustomForm /> */}
        <FileUploader />
      </main>
    </>
  );
}
