import '../styles/globals.scss'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
// import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <Head>
        <title>Lore of Degenerates</title>
        <meta name="description" content="A NFT Collection that involves a gamifying the aspects of socializing with the community." />
        <link rel="icon" href="/icon.png" />
      </Head>


      {/* {isLoading && <div className="loading">
        <span className="loader"></span>
      </div>} */}

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>

  )
}

export default MyApp
