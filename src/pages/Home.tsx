import SEO from '@/components/SEO'
import JsonLd from '@/components/JsonLd'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Method from '@/components/sections/Method'
import About from '@/components/sections/About'
import Realisations from '@/components/sections/Realisations'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <SEO />
      <JsonLd />
      <main>
        <Hero />
        <Services />
        <Realisations />
        <Method />
        <About />
        <FAQ />
        <Contact />
      </main>
    </>
  )
}
