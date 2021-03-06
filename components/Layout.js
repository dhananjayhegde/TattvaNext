import React from 'react'
import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout({children}) {
  return (    
    <>        
        <Head>
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
        </Head>        
        <main>
          <NavBar />
          {children}
          <Footer />
        </main>
    </>
  )
}
