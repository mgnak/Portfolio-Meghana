'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Twitter, Mail, Download, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/mgnak',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/meghana-kudingila',
      label: 'LinkedIn'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/meghana.0k',
      label: 'Instagram'
    },
    {
      icon: Mail,
      href: 'mailto:meghanamgnak@gmail.com',
      label: 'Email'
    }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Resume_Meghana_K.pdf'
    link.download = 'Meghana_Resume.pdf'
    link.click()
  }

  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <motion.button
              onClick={scrollToTop}
              className="text-2xl font-bold gradient-text mb-4 hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.05 }}
            >
              Meghana K
            </motion.button>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-md">
              Full Stack Developer passionate about creating innovative web solutions 
              with modern technologies. Always learning, always growing.
            </p>
            <motion.button
              onClick={downloadResume}
              className="btn-primary flex items-center gap-2 w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => {
                      const element = document.querySelector(link.href)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <social.icon size={18} />
                  {social.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-slate-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} Meghana Kudingila. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500" fill="currentColor" />
              </motion.div>
              <span>and lots of ☕</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer