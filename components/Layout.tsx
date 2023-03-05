import Footer from "@/components/Footer";
import Head from "next/head";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {children}
      <Footer/>
    </>
  );
}
