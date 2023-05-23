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
import FileUploader from "components/fileUploader";
import Generator from "./generator";
import Spinner from "components/spinner";
import ReaderRes from "components/reader-result";
import CaptureImg from "components/captureImage";
import Homepage from "./home";

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
        {/* <FileUploader /> */}
        {/* <Generator /> */}
        {/* <Spinner /> */}
        {/* <ReaderRes data="https://ranaintizar.com" /> */}
        {/* <CaptureImg /> */}
        <Homepage />
      </main>
    </>
  );
}
