import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/solid.css'
import '@fortawesome/fontawesome-free/css/brands.css'

import '../styles/globals.scss'

import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import client from '../components/ApolloClient'
import { ApolloProvider } from '@apollo/client'
import { ToastContainer } from 'react-toastify'

function MyApp ({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Sitting on Clouds</title>
        <meta key='url' property='og:url' content='/' />
        <meta key='title' property='og:title' content='Sitting on Clouds — High Quality soundtrack library' />
        <meta key='desc' property='og:description' content='Largest Video Game & Animation Soundtrack サウンドトラック Archive' />
        <meta key='image' property='og:image' content='/img/assets/clouds_thumb.png' />
      </Head>
      <ToastContainer newestOnTop />
      <Header />
      <Container fluid className='flex-grow-1'>
        <Component {...pageProps} />
      </Container>
    </ApolloProvider>
  )
}

export default MyApp
