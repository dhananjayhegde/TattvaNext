import React from 'react'
import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout({children}) {
  return (    
    <>        
        <Head>
          <title>Tatta Hatha Yoga</title>
        </Head>        
        <main>
          <NavBar />
          {children}
        </main>   
        <Footer />     
    </>
  )
}
