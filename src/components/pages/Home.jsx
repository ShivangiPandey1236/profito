import React from 'react'
import Hero from '../Hero'
import About from '../About'
import StatsSection from '../StatsSection'
import CTASection from '../CTASection'
import ClientsSection from '../ClientsSection'
import Services from '../Services'
import IndustriesSection from '../IndustriesSection'
import TestimonialsSection from '../TestimonialsSection'
import FAQSection from '../FAQSection'
import ResourceHub from '../ResourceHub'

function Home() {
    return (
        <div>
            <Hero></Hero>
            <div className="section-divider" />
            {/* <About></About> */}
            <div className="section-divider" />
            {/* <StatsSection></StatsSection> */}
            {/* <div className="section-divider" /> */}
            {/* <CTASection /> */}
            {/* <div className="section-divider" /> */}
            {/* <ClientsSection /> */}
            <div className="section-divider" />
            {/* <Services/> */}
            <div className="section-divider" />
            {/* <IndustriesSection /> */}
            <div className="section-divider" />
            {/* <TestimonialsSection /> */}
            {/* <FAQSection /> */}
            <div className="section-divider" />
            {/* <ResourceHub /> */}
        </div>
    )
}

export default Home