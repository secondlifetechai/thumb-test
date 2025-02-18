import CTA from '@/components/marketing/cta'
import FAQ from '@/components/marketing/faq'
import Features from '@/components/marketing/features'
import Hero from '@/components/marketing/hero'
import HowItWorks from '@/components/marketing/how-it-works'
import Perks from '@/components/marketing/perks'
import PlatformMetrics from '@/components/marketing/platform-metrics'
import Pricing from '@/components/marketing/pricing'
import Testimonials from '@/components/marketing/testimonials'
import React from 'react'

const HomePage = () => {
  return (
    <div className="w-full relative flex flex-col">
        <section className="w-full">
            <Hero />
        </section>

        <section className="w-full">
            <Perks />
        </section>

        <section className="w-full">
            <HowItWorks />
        </section>

        <section className="w-full">
            <Features />
        </section>

        <section className="w-full">
            <Testimonials />
        </section>

        <section className="w-full">
            <Pricing />
        </section>

        <section className="w-full">
            <PlatformMetrics />
        </section>

        <section className="w-full">
            <FAQ />
        </section>

        <section className="w-full">
            <CTA />
        </section>
    </div>
  )
}

export default HomePage