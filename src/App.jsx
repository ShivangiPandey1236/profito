import React from 'react'
import Layout from './components/Layout'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Home from './components/pages/Home'

function App() {
  return (
    <Layout>
      <Home/>
      {/* <Hero /> */}
      {/* <div className="section-divider" /> */}
      {/* <Services /> */}
      {/* <About /> */}
    </Layout>
  )
}

export default App