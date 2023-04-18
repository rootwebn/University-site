import '@/styles/globals.scss'
import Layout from '../../components/layout/layout'
import localFont from 'next/font/local'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export const raleWay = localFont({
  src: [
    {
      path: '../../public/fonts/Raleway/Raleway-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Raleway/Raleway-Light.ttf',
      weight: '300',
      style: 'normal'
    }
  ]
})

export const fauna = localFont({
  src: [
    {
      path: '../../public/fonts/Fauna One Regular.ttf',
      weight: '500',
      style: 'normal'
    },
  ]
})

export const montsserat = localFont({
  src: [
    {
      path: '../../public/fonts/Montserrat SemiBold.ttf',
      weight: '500',
      style: 'normal'
    },
  ]
})

export const sora = localFont({
  src: [
    {
      path: '../../public/fonts/Sora Medium.ttf',
      weight: '500',
      style: 'normal'
    },
  ]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Slava Stecenko Site</title>
        <meta name="description" content="Personal student site Slava Stecenko" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
