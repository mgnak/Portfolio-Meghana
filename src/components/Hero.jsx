'use client'

import { motion } from 'framer-motion'
import { Download, ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { TypeAnimation } from 'react-type-animation'
import FloatingShapes from './3D/FloatingShapes'

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume_meghana_k.pdf'
    link.download = 'Meghana_K_Resume.pdf'
    link.click()
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <FloatingShapes />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute inset-0 mesh-gradient opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
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
              <TypeAnimation
                sequence={[
                  'Fresh IT graduate',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'Backend Developer',
                  2000,
                  'UI/UX Designer',
                  2000                  
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative web solutions with modern technologies. 
            I specialize in React, Java, and Spring Boot to build scalable, 
            user-friendly applications that make a difference.
            Interested in UI?UX design tools.
          </motion.p>

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center space-x-6 pt-8"
          >
            {[
              { icon: Github, href: 'https://github.com/mgnak', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/meghana-kudingila', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:meghanamgnak@gmail.com', label: 'Email' },
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
        </motion.div>
      </div>
    </section>
  )
}

export default Hero