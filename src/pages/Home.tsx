import SEO from '@/components/SEO'
import JsonLd from '@/components/JsonLd'
import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Services from '@/components/sections/Services'
import BeforeAfter from '@/components/sections/BeforeAfter'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <SEO />
      <JsonLd />
      <main>
        <Hero />
        <Problem />
        <Services />
        <BeforeAfter />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  )
}
