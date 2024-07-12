'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="text-foreground text-2xl font-bold">
          Logo
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/about" className="text-foreground hover:text-primary">About Us</Link>
          <Link href="/results" className="text-foreground hover:text-primary">Results</Link>
          <Link href="/services" className="text-foreground hover:text-primary">Services</Link>
          <Link href="/process" className="text-foreground hover:text-primary">Process</Link>
          <Link href="/faqs" className="text-foreground hover:text-primary">FAQs</Link>
        </div>
        <Button variant="default">Book a call</Button>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={toggleMenu}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-background/80 backdrop-blur-sm absolute top-16 w-full">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="/about" className="text-foreground hover:text-primary" onClick={toggleMenu}>About Us</Link>
            <Link href="/results" className="text-foreground hover:text-primary" onClick={toggleMenu}>Results</Link>
            <Link href="/services" className="text-foreground hover:text-primary" onClick={toggleMenu}>Services</Link>
            <Link href="/process" className="text-foreground hover:text-primary" onClick={toggleMenu}>Process</Link>
            <Link href="/faqs" className="text-foreground hover:text-primary" onClick={toggleMenu}>FAQs</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
