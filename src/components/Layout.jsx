import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Reusable Header */}
      <Header />

      {/* Main Page Content */}
      <main className="grow pt-[106px] max-[576px]:pt-[70px]">
        {children}
      </main>

      {/* Reusable Footer */}
      <Footer />
    </div>
  )
}
