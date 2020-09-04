import Link from 'next/link'
import Header from '../components/Header'

const IndexPage = () => (
  <div>
    <Header/>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </div>
)

export default IndexPage
