import Main from "@/components/Main";
import Head from 'next/head'
import Link from '@/components/Link'

const links = ["about", "photography", "software"]

export default function Home() {
  return (
    <>
      <Head>
        <title>Xyza</title>
        <meta name="description" content="Xyza Rivera's digital garden" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <div className="flex flex-col">
        {links.map((link) => {
          return (
            <Link href={`/${link}`} key={link}>
              <h2 className="text-6xl sm:text-8xl capitalize">{link}</h2>
            </Link>
          )
        })}
        </div>
      </Main>
    </>
  )
}
