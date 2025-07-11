'use client'

import { motion } from 'framer-motion'
import { Code, Database, Server, Smartphone, Award, BookOpen, Zap, Heart } from 'lucide-react'

const About = () => {
  const techStack = [
    { name: 'React', icon: '⚛️', color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { name: 'Node.js', icon: '🟢', color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/30' },
    { name: 'Java', icon: '☕', color: 'text-orange-500', bg: 'bg-orange-100 dark:bg-orange-900/30' },
    { name: 'Spring Boot', icon: '🍃', color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/30' },
    { name: 'JavaScript', icon: '🟨', color: 'text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-900/30' },
    { name: 'TypeScript', icon: '🔷', color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { name: 'MySQL', icon: '🐬', color: 'text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { name: 'MongoDB', icon: '🍃', color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/30' },
    { name: 'Next.js', icon: '▲', color: 'text-black dark:text-white', bg: 'bg-gray-100 dark:bg-gray-800' },
    { name: 'Docker', icon: '🐳', color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { name: 'AWS', icon: '☁️', color: 'text-orange-400', bg: 'bg-orange-100 dark:bg-orange-900/30' },
    { name: 'Git', icon: '📚', color: 'text-orange-500', bg: 'bg-orange-100 dark:bg-orange-900/30' },
  ]

  const stats = [
    { icon: Code, value: '50+', label: 'Projects Completed', color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { icon: Award, value: '15+', label: 'Certifications', color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-900/30' },
    { icon: BookOpen, value: '3+', label: 'Years Experience', color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/30' },
    { icon: Server, value: '20+', label: 'Technologies', color: 'text-orange-500', bg: 'bg-orange-100 dark:bg-orange-900/30' },
  ]

  const highlights = [
    { icon: Zap, text: 'Performance Optimization Expert' },
    { icon: Heart, text: 'User Experience Focused' },
    { icon: Code, text: 'Clean Code Advocate' },
  ]

  return (
    <section id="about" className="py-24 section-bg-light dark:section-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold gradient-text mb-8"
            whileHover={{ scale: 1.02 }}
          >
            About Me
          </motion.h2>
          <p className="text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Discover my journey in software development and the technologies I'm passionate about
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h3 
                className="text-3xl font-semibold text-slate-800 dark:text-slate-200"
                whileHover={{ scale: 1.02 }}
              >
                Hello! I'm Meghana K
              </motion.h3>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                I'm a passionate Full Stack Developer with over 3 years of experience building 
                modern web applications. My journey started with a Computer Science degree from 
                Tech University, and I've been constantly learning and growing ever since.
              </p>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                I specialize in creating scalable, user-friendly applications using cutting-edge 
                technologies. Whether it's a responsive frontend with React or a robust backend 
                with Node.js and Java, I love turning complex problems into simple, elegant solutions.
              </p>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the dev community.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-2xl glass cursor-hover"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <highlight.icon className="w-6 h-6 text-blue-500" />
                  <span className="text-lg font-medium text-slate-700 dark:text-slate-300">
                    {highlight.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <motion.div 
              className="glass p-8 rounded-3xl shadow-xl cursor-hover"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-blue-500" />
                Education
              </h4>
              <div className="space-y-3">
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  <strong className="text-slate-800 dark:text-slate-200">Bachelor of Science in Computer Science</strong>
                </p>
                <p className="text-slate-500 dark:text-slate-500 font-medium">
                  Tech University • 2020 - 2024
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Tech Stack & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-3xl shadow-xl text-center card-hover cursor-hover"
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${stat.bg} flex items-center justify-center`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack */}
            <motion.div 
              className="glass p-8 rounded-3xl shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-8 flex items-center gap-3">
                <Code className="w-6 h-6 text-purple-500" />
                Tech Stack
              </h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    className={`flex flex-col items-center p-4 rounded-2xl ${tech.bg} hover:shadow-lg transition-all duration-300 group cursor-hover`}
                    whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                  >
                    <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <span className={`text-xs font-semibold ${tech.color} text-center leading-tight`}>
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div 
            className="inline-block glass p-8 rounded-3xl shadow-2xl cursor-hover"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-6 max-w-2xl">
              Ready to bring your ideas to life? Let's collaborate and create something amazing together!
            </p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-8 py-4 text-lg font-semibold rounded-2xl cursor-hover"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Work Together
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About