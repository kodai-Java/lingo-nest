import { getServerSession } from 'next-auth'
import { authOptions } from './lib/auth'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <section className="hero flex flex-col items-center text-center py-20 px-5">
      <h1 className="text-5xl font-bold mb-5">Master Vocabulary with LingoNest</h1>
      <p className="text-lg max-w-xl opacity-80">
        The professional tool to enhance your English vocabulary.
      </p>
      <h1>ようこそ、{session && session.user?.email} さん！</h1>
      <a
        href="/transtory"
        className="cta-button inline-block mt-5 px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg transition-all duration-300 hover:bg-blue-400"
      >
        Start Learning
      </a>
    </section>
  )
}
