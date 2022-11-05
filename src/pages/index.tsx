import * as React from "react"
import type { HeadFC } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <div>
      <main className="flex flex-col">
        <section>
          <h1 className="my-6">Xyza Rivera</h1>
          <h2 className="mt-16 mb-10">Software Engineer | Visual Creative</h2>
        </section>
        <section className="flex px-20 pb-16">
          <div className="basis-1/2 p-5 flex justify-end align-center">
            <StaticImage alt="xyza's picture" src="../images/xyza.png" placeholder="blurred"
              layout="fixed"
              width={435}
              height={435} />
          </div>
          <div className="basis-1/2 p-5">
            <p className="mb-2 mt-10 font-serif">I am a <strong>software engineer</strong> passionate about building products focused on user value and productivity.</p>
            <p className="mb-2 text-sm">Currently improving workplace processes at <a href="https://www.globe.com.ph" target="_blank" rel="noreferrer">Globe Telecom</a></p>
            <p className="mb-5 text-sm italic">ReactJS, JavaScript, TypeScript, Google Cloud Platform, Firebase</p>

            <p className="mb-2 font-serif">Also, a visual creative on the weekends.</p>
            <p className="text-sm mb-2">always taking photos on <a href="https://www.instagram.com/xyzarivera_film/" target="_blank" rel="noreferrer">film</a> or <a href="https://www.instagram.com/xyzarivera_/" target="_blank" rel="noreferrer">digital</a></p>
            <p className="text-sm mb-2">re-learning <a href="https://www.instagram.com/xyzarivera_art/" target="_blank" rel="noreferrer">illustrations</a></p>
            <p className="text-sm mb-2">learning <a href="https://www.youtube.com/c/XyzaRivera" target="_blank" rel="noreferrer">cinematography</a></p>
          </div>
        </section>
        <section className="w-screen bg-violet-200 flex align-center px-28 py-24">
          <h3 className="basis-5/12 text-left my-auto">Skills</h3>
          <div className="basis-7/12">
            <p className="text-2xl py-2">Full-stack Web Development</p>
            <p className="text-2xl py-2">Serverless Architecture</p>
            <p className="text-2xl py-2">User Experience Design</p>
          </div>
        </section>
        <section className="w-screen flex align-center px-28 py-32">
          <h3 className="basis-5/12 text-left  my-auto">Certifications</h3>
          <div className="basis-7/12 flex flex-col">
            <a className="text-2xl py-2 text-current no-underline hover:underline" href="https://www.credential.net/a3221740-82d3-4fbc-af4e-b474cc487bd0" target="_blank" rel="noreferrer">Google Cloud Certified Associate Cloud Engineer</a>
            <a className="text-2xl py-2 text-current no-underline hover:underline" href="https://www.credly.com/badges/4beef1a3-898f-4998-85c5-cad57b71f597/linked_in_profile" target="_blank" rel="noreferrer">AWS Certified Solutions Architect - Associate</a>
          </div>
        </section>
        <section className="w-screen bg-black px-28 py-20">
          <h3 className="my-auto text-left text-white">Projects</h3>
          <div className="flex flex-start justify-between py-10">
            <div className="basis-1/3 flex flex-col items-center p-2">
              <a href="https://xyzarivera.notion.site/xyzarivera/8b07afbfc547484c871413528acc4daf?v=fa6d552026cb424eb756a112d46b6e93"
                target="_blank" rel="noreferrer"
                className="transition transform hover:-translate-y-2">
                <StaticImage alt="codex" src="../images/codex.png" placeholder="blurred"
                  layout="fixed"
                  width={340}
                  height={195} />
              </a>
              <a className="font-serif text-xl text-center text-white mt-8 py-2 text-current no-underline hover:underline"
                href="https://xyzarivera.notion.site/xyzarivera/8b07afbfc547484c871413528acc4daf?v=fa6d552026cb424eb756a112d46b6e93"
                target="_blank" rel="noreferrer">
                Codex
              </a>
              <p className="italic text-center text-sm text-white py-2">Notion</p>
              <p className="text-center text-sm text-white py-2">
                My Developer Notes made public. I document my learnings in project setup, programming concepts, and commonly used commands
              </p>
            </div>
            <div className="basis-1/3 flex flex-col items-center p-2">
              <a href="https://memo.ph/" target="_blank" rel="noreferrer"
                className="transition transform hover:-translate-y-2">
                <StaticImage alt="memo picture" src="../images/memo.png" placeholder="blurred"
                  layout="fixed"
                  width={340}
                  height={195} />
              </a>
              <a className="font-serif text-xl text-center text-white mt-8 py-2 text-current no-underline hover:underline"
                href="https://memo.ph/"
                target="_blank" rel="noreferrer">
                Memo.ph
              </a>
              <p className="italic text-center text-sm text-white py-2">TypeScript, ReactJS, TailwindCSS, GCP, Firebase</p>
              <p className="text-center text-sm text-white py-2">
                A memo approval system used by companies under the Globe Group. Built on modern tools and architecture,
                we were able to greatly reduce infrastructure cost without compromise on performance.
              </p>
            </div>
            <div className="basis-1/3 flex flex-col items-center p-2">
              <a href="https://github.com/YACT-jp/e-mina-mobile-frontend" target="_blank" rel="noreferrer"
                className="transition transform hover:-translate-y-2">
                <StaticImage alt="emina picture" src="../images/emina.png" placeholder="blurred"
                  layout="fixed"
                  width={340}
                  height={195} />
              </a>
              <a className="font-serif text-xl text-center text-white mt-8 py-2 text-current no-underline hover:underline"
                href="https://github.com/YACT-jp/e-mina-mobile-frontend"
                target="_blank" rel="noreferrer">
                E-mina
              </a>
              <p className="italic text-center text-sm text-white py-2">React Native, NativeBase, Express, MongoDB, Realm</p>
              <p className="text-center text-sm text-white py-2">
                A pop-cultute tourism app that introduces travellers to famous Japanese pop-culture locations. Mainly worked as tech lead
                for this project with major contributions on authentication and asynchronous storage.
              </p>
            </div>
          </div>
        </section>
        <section className="w-screen flex align-center px-28 py-44">
          <h3 className="basis-8/12 text-left my-auto">Let's Connect</h3>
          <div className="basis-4/12 flex flex-col">
            <a className="text-2xl py-2 text-current decoration-1 hover:decoration-2"
              href="https://www.linkedin.com/in/xyzarivera/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="text-2xl py-2 text-current decoration-1 hover:decoration-2"
              href="https://github.com/xyzarivera" target="_blank" rel="noreferrer">
              Github
            </a>
            <a className="text-2xl py-2 text-current decoration-1 hover:decoration-2"
              href="https://www.instagram.com/xyzarivera_/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="text-2xl py-2 text-current decoration-1 hover:decoration-2"
              href="https://twitter.com/xyza_rivera" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a className="text-2xl py-2 text-current decoration-1 hover:decoration-2"
              href="https://www.youtube.com/c/XyzaRivera" target="_blank" rel="noreferrer">
              Youtube
            </a>
          </div>
        </section>
      </main>
      <footer className="w-full bg-black px-28 py-20 flex">
        <div className="basis-8/12 flex flex-col">
          <h3 className="text-lg text-white font-serif">Xyza Rivera</h3>
          <p className="text-gray-500 py-2">Software Engineer | Visual Creative</p>
          <p className="text-white mt-48 text-xs">Copyright © 2022 Xyza Rivera. All rights reserved.</p>
        </div>
        <div className="basis-4/12 flex flex-col">
          <h4 className="text-white font-serif">Location</h4>
          <p className="text-gray-500 py-2">Manila, Philippines</p>
        </div>
      </footer>
    </div >
  )

}

export default IndexPage

export const Head: HeadFC = () => <title>Xyza Rivera</title>
