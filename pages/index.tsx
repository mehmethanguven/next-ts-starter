import { Inter } from '@next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
import CardContainer from '@/components/CardContainer'
import { toast } from 'react-toastify'

export default function Home() {
  const notify = (title: string) =>
    toast(`🦄 ${title}`, {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
  return (
    <div className="mx-auto flex flex-col items-center justify-center md:mb-10">
      <h1 className="mt-10 mb-4 p-4 text-3xl font-bold text-gray-500 md:text-3xl">
        Next.js starter project
      </h1>
      <p className="p-4 text-lg text-gray-500 md:text-lg">
        Based on: Next.js - Typescript - Jest - Cypress - Tailwindcss - Eslint -
        Prettier - Lintstaged - Hasky
      </p>
      <div className="m-4 mt-10 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
        <CardContainer>
          <div className="flex w-full flex-row items-center justify-between">
            <h2>React toastify</h2>
            <button
              className="mt-2 rounded-lg border border-gray-400 bg-white px-4 py-2 text-gray-900 shadow-lg"
              onClick={() => notify('Notify is working')}
            >
              Click to test
            </button>
          </div>
        </CardContainer>
        <CardContainer>
          <Link href="/about">
            <h2>About Page &rarr;</h2>
            <p>Cypress will test if this link is working.</p>
          </Link>
        </CardContainer>
        <CardContainer>
          <a href="https://nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </CardContainer>

        <CardContainer>
          <a href="https://nextjs.org/learn">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </CardContainer>

        <CardContainer>
          <a href="https://github.com/vercel/next.js/tree/canary/examples">
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </CardContainer>

        <CardContainer>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>Deploy &rarr;</h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </CardContainer>
      </div>
    </div>
  )
}
