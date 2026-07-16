import React from 'react'
import Hero from '../Hero'
import About from '../About'
import StatsSection from '../StatsSection'

function Home() {
    return (
        <div>
            <Hero></Hero>
            <div className="section-divider" />
            <About></About>
            <div className="section-divider" />
            <StatsSection></StatsSection>
        </div>
    )
}

export default Home