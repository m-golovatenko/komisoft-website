import '@/styles/globals.css'
import {
  About,
  CTA,
  Footer,
  Hero,
  Projects,
  Services
} from '@/components/layout'

function App() {
  return (
    <>
      {/*<Header />*/}
      <Hero />
      <About />
      <Projects />
      <Services />
      <CTA />
      <Footer />
    </>
  )
}

export default App
