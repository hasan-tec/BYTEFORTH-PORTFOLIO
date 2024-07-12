import { Button } from "@/components/ui/button"

import Image from 'next/image';

const HeroSection = () => {
  const profileImages = [
    "/pexels-jack-winbow-460463-1559486.jpg",
    "/pexels-blitzboy-1040880.jpg",
    "/pexels-andrewpersonaltraining-697509.jpg",
    "/pexels-pixabay-34534.jpg",
    "/pexels-moh-adbelghaffar-771742.jpg",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-background text-foreground relative overflow-hidden">
      
      <div className="container mx-auto text-center px-4 relative z-10">
        <div className="flex flex-wrap justify-center mb-4">
          {profileImages.map((src, i) => (
            <Image key={i} src={src} alt={`Profile ${i + 1}`} width={32} height={32} className="rounded-full object-cover m-2 md:w-8 md:h-8" />
          ))}
        </div>
        <div className="text-sm mb-4">Trusted by 20+ brands & creators</div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Ready to <span className="text-primary">scale</span> your<br />
          brand with <span className="text-primary">creativity</span>?
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Hire a team of top-tier professionals committed to delivering exceptional digital experiences.
        </p>
        <div className="flex flex-wrap justify-center lg:space-x-8 space-x-4 md:space-x-0">
          <Button variant="default" size="lg">Book a call</Button>
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection