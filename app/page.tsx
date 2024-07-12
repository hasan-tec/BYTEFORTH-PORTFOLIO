import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import InfiniteLogoScroll from './components/InfiniteLogoScroll'
import MissionStatement from './components/MissionStatement'
import TestimonialSection from './components/TestimonialSection'
import ResultsSection from './components/ResultsSection'
import ServicesComponent from './components/Services'
import PortfolioComponent from './components/Portfolio'
import ComparisonSection from './components/ComparisonSection'
import ProcessSection from './components/ProcessSection'
import Rave from './components/Rave'
import Footer from './components/Footer'
import AccordionDemo from './components/AccordionDemo'


export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4">
        <HeroSection />
        <InfiniteLogoScroll />
        <MissionStatement />
        <TestimonialSection />
        <ResultsSection />
        <ServicesComponent />
        
        <ComparisonSection />
        <ProcessSection />
        <Rave />
        <AccordionDemo />
        <Footer />
      </div>
    </main>
  )
}