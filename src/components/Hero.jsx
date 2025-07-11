'use client'

import { motion } from 'framer-motion'
import { Download, ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import FloatingShapes from './3D/FloatingShapes'

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadResume = () => {
    // Create a sample resume download link
    const link = document.createElement('a')
    link.href = '/resume.pdf' // You would replace this with actual resume file
    link.download = 'Meghana_K_Resume.pdf'
    link.click()
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <FloatingShapes />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium">
              Hi, I'm
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text leading-tight cursor-hover">
              Meghana K
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-700 dark:text-slate-300 cursor-hover">
              Full Stack Developer
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative web solutions with modern technologies. 
            I specialize in React, Next.js, Java, and Spring Boot to build scalable, 
            user-friendly applications that make a difference.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={scrollToProjects}
              className="btn-primary px-8 py-3 text-lg font-semibold rounded-full flex items-center gap-2 group cursor-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </motion.button>
            
            <motion.button
              onClick={downloadResume}
              className="btn-secondary px-8 py-3 text-lg font-semibold rounded-full flex items-center gap-2 group cursor-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center space-x-6 pt-8"
          >
            {[
              { icon: Github, href: 'https://github.com/alexjohnson', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/alexjohnson', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:alex@example.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:bg-blue-500/20 transition-all duration-300 group cursor-hover"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon size={24} className="text-slate-600 dark:text-slate-400 group-hover:text-blue-500 transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-hover"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero