import Layout from '../components/Layout'
import '../styles/globals.css'
import Script from 'next/script'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab, far, fas)

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LVP9M3QXMR"></Script>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; function gtag(){ dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'G-LVP9M3QXMR');`}
      </Script>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
