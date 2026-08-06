import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Careers from './pages/Careers'
import ServicePage from './pages/ServicePage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/service/:slug" element={<ServicePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>
    </Layout>
  )
}

export default App