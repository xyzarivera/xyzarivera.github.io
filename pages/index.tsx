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
      </Head>
      <Main>
        <div className="px-4 pt-60 flex flex-col">
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
