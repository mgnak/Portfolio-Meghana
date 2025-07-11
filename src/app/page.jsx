'use client'

import About from "@/components/About"
import Certificates from "@/components/Certificates"
import Contact from "@/components/Contact"
import FluidCursor from "@/components/FluidCursor"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import LoadingSpinner from "@/components/LandingSpinner"
import NavBar from "@/components/NavBar"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import { Suspense } from "react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <FluidCursor />
      <Suspense fallback={<LoadingSpinner />}>
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  )
}