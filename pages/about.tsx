import Main from "@/components/Main";
import Navigation from "@/components/Navigation";
import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Xyza</title>
        <meta name="description" content="Xyza Rivera's profile" />
      </Head>
      <Navigation />
      <Main>
        <div className="hero min-h-screen w-screen">
          <div className="hero-content">
            <div className="avatar mx-2">
              <div className="w-96 rounded-full">
                <Image
                  src="/images/dp2.png"
                  alt="Xyza's display photo"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className="max-w-3xl">
              <h1 className="text-5xl text-primary font-bold">
                Hi, I&apos;m Xyza!
              </h1>
              <h2 className="text-3xl font-bold">
                🐱 A creative coding cat from Manila.
              </h2>
              <p className="py-4">
                I&apos;m a <span className="font-bold">Software Engineer</span>{" "}
                at{" "}
                <a
                  className="text-accent font-bold underline"
                  href="https://recursiveai.co.jp/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  Recursive AI
                </a>{" "}
                focused on building AI solutions for sustainability.
                <br /> Also, a visual creative on the weekends -{" "}
                <a
                  className="text-secondary underline"
                  href="https://www.instagram.com/xyzarivera_/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  photography
                </a>
                ,{" "}
                <a
                  className="text-secondary underline"
                  href="https://www.youtube.com/xyzarivera"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  vlogs
                </a>{" "}
                ,{" "}
                <a
                  className="text-secondary underline"
                  href="https://www.instagram.com/xyzarivera_art/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  illustrations
                </a>{" "}
                .
              </p>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
