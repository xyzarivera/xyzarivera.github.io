import Main from "@/components/Main";
import Navigation from "@/components/Navigation";
import Head from "next/head";

export default function Software() {
  return (
    <>
      <Head>
        <title>Software | Xyza</title>
        <meta name="description" content="Page not found" />
      </Head>
      <Navigation />
      <Main>
        <div className="hero min-h-screen w-screen">
          <div className="hero-content">
            <div className="max-w-3xl text-center">
              <h1 className="text-5xl font-bold">💻</h1>
              <h2 className="text-3xl font-bold">code still under review</h2>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
