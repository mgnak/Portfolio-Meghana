'use client'

import { motion } from 'framer-motion'
import { Code, Database, Server, Smartphone, Cloud, Shield, Zap, Star } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 98 },
        { name: 'Tailwind CSS', level: 92 },
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Java', level: 88 },
        { name: 'Spring Boot', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'REST APIs', level: 95 },
        { name: 'GraphQL', level: 75 },
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'Firebase', level: 85 },
        { name: 'Prisma', level: 82 },
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 70 },
        { name: 'Expo', level: 88 },
        { name: 'Mobile UI/UX', level: 82 },
        { name: 'App Store Deploy', level: 80 },
        { name: 'Push Notifications', level: 75 },
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 82 },
        { name: 'Kubernetes', level: 70 },
        { name: 'CI/CD', level: 88 },
        { name: 'Nginx', level: 80 },
        { name: 'Linux', level: 85 },
      ]
    },
    {
      title: 'Tools & Others',
      icon: Shield,
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'VS Code', level: 98 },
        { name: 'Figma', level: 80 },
        { name: 'Postman', level: 90 },
        { name: 'Jest', level: 85 },
        { name: 'Webpack', level: 75 },
      ]
    },
  ]

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-800">
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
            Skills & Expertise
          </motion.h2>
          <p className="text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
              // whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="space-y-4">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} mr-4 shadow-lg`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.5 }}
                    viewport={{ once: true }}
                    className="skill-item"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
                          {skill.level}%
                        </span>
                        {skill.level >= 90 && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3, duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                          animate={{ x: [-100, 200] }}
                          transition={{ duration: 2, repeat: Infinity, delay: skillIndex * 0.2 }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative">
            <motion.div 
              className="glass p-12 rounded-3xl shadow-2xl cursor-hover overflow-hidden"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 animate-gradient-flow"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Zap className="w-8 h-8 text-yellow-500" />
                  <h3 className="text-3xl font-bold gradient-text">
                    Always Learning, Always Growing
                  </h3>
                  <Zap className="w-8 h-8 text-yellow-500" />
                </div>
                
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                  tools, and best practices to stay at the forefront of web development.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  {['Problem Solving', 'Team Collaboration', 'Agile Methodology', 'Code Review', 'Mentoring', 'Innovation'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="px-6 py-3 glass rounded-2xl text-slate-700 dark:text-slate-300 text-lg font-semibold cursor-hover border border-white/30 dark:border-slate-600/30"
                      whileHover={{ scale: 1.1, y: -3 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills