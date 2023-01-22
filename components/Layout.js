import React from 'react'
import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout({children}) {
  return (    
    <>        
        <Head>
          {/* <!-- Google tag (gtag.js) --> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-LVP9M3QXMR"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments) }
            gtag('js', new Date());

            gtag('config', 'G-LVP9M3QXMR');
          </script>
          <title>
            Best Hathayoga classes in Bengaluru | Tattva Hathayoga
          </title>
          <meta 
            name="description" 
            content="Conducted by Isha Certified Yoga Teacher with years of experience in teaching. Learn Surya Kriya, Angamardana, Yogasanas, Bhuta Shuddi and other hathayoga practices."
            key="desc" 
          />
          <meta property="og:title" content="Best Hathayoga classes in Bengaluru | Tattva Hathayoga" />
          <meta
            property="og:description"
            content="Conducted by Isha Certified Yoga Teacher with years of experience in teaching. Learn Surya Kriya, Angamardana, Yogasanas, Bhuta Shuddi and other hathayoga practices."
          />
          <meta
            property="og:image"
            content="/public/images/hero_image.png"
          />
          <meta 
            name="google-site-verification" 
            content="vQK88sKzSNELc15ir5ACl2wNeJpiRRHhANW7h1BxANc" 
          />
          {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" /> */}
        </Head>        
        <main>
          <NavBar />
            {children}
          <Footer />
        </main>
    </>
  )
}
