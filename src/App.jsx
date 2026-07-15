import React from 'react'
import Layout from './components/Layout'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'

function App() {
  return (
    <Layout>
      <Hero />
      <div className="section-divider" />
      {/* <Services /> */}
      <About />
    </Layout>
  )
}

export default App