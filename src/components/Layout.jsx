import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Reusable Header */}
      <Header />

      {/* Main Page Content */}
      <main className="grow">
        {children}
      </main>

      {/* Reusable Footer */}
      <Footer />
    </div>
  )
}
