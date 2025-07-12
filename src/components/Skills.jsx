'use client'

import { motion } from 'framer-motion'
import { Code, Database, Server, Smartphone, Cloud, Shield } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'text-blue-500 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      skills: [
        { name: 'React', icon: '/images/logos/react.png' },
        { name: 'Next.js', icon: '/images/logos/nextjs.png' },
        { name: 'JavaScript', icon: '/images/logos/javascript.png' },
        // { name: 'TypeScript', icon: '/images/logos/typescript.png' },
        { name: 'HTML/CSS', icon: '/images/logos/html5.png' },
        { name: 'Tailwind CSS', icon: '/images/logos/tailwind.png' }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'text-green-500 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      skills: [
        { name: 'Node.js', icon: '/images/logos/nodejs.png' },
        { name: 'Java', icon: '/images/logos/java.png' },
        { name: 'Spring Boot', icon: '/images/logos/springboot.png' },
        { name: 'Python', icon: '/images/logos/python.png' },
        { name: 'REST APIs', icon: '/images/logos/rest-api.png' },
        { name: 'MongoDB', icon: '/images/logos/mongodb.png' }
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      color: 'text-orange-500 dark:text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
      skills: [
        { name: 'MySQL', icon: '/images/logos/mysql.png' },
        { name: 'MongoDB', icon: '/images/logos/mongodb.png' },
        { name: 'PostgreSQL', icon: '/images/logos/postgresql.png' },
        { name: 'Redis', icon: '/images/logos/redis.png' },
        { name: 'Firebase', icon: '/images/logos/firebase.png' },
        // { name: 'Prisma', icon: '/images/logos/prisma.png' }
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'text-purple-500 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      skills: [
        // { name: 'React Native', icon: '/images/logos/reactnative.png' },
        { name: 'Flutter', icon: '/images/logos/flutter.png' },
        // { name: 'Expo', icon: '/images/logos/expo.png' },
        { name: 'Android Studio', icon: '/images/logos/android-studio.png' },
        // { name: 'App Store Deploy', icon: null },
        { name: 'Push Notifications', icon: '/images/logos/pushnotification.png' }
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'text-cyan-500 dark:text-cyan-400',
      bgColor: 'bg-cyan-100 dark:bg-cyan-900/30',
      skills: [
        { name: 'Docker', icon: '/images/logos/docker.png' },
        { name: 'AWS', icon: '/images/logos/aws.png' },
        { name: 'Kubernetes', icon: '/images/logos/kubernetes.png' },
        // { name: 'CI/CD', icon: null },
        // { name: 'Nginx', icon: '/images/logos/nginx.png' },
        // { name: 'Linux', icon: null }
      ]
    },
    {
      title: 'Tools & Others',
      icon: Shield,
      color: 'text-indigo-500 dark:text-indigo-400',
      bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
      skills: [
        { name: 'Git', icon: '/images/logos/github.png' },
        { name: 'VS Code', icon: '/images/logos/vscode.png' },
        { name: 'Figma', icon: '/images/logos/figma.png' },
        { name: 'Postman', icon: '/images/logos/postman.png' },
        // { name: 'Jest', icon: '/images/logos/jest.png' },
        // { name: 'Webpack', icon: '/images/logos/webpack.png' }
      ]
    }
  ]

  return (
    <section id="skills" className="py-24 section-bg-light dark:section-bg-dark">
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
            A comprehensive overview of my technical skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-3xl glass shadow-xl card-hover cursor-hover transition-all duration-300`}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className={`w-6 h-6 ${category.color}`} />
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: skillIndex * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-2 p-3 rounded-2xl ${category.bgColor} hover:shadow-lg transition-all duration-300 group cursor-hover`}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    {skill.icon ? (
                      <img
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        className={`w-6 h-6 object-contain ${category.color} group-hover:scale-125 transition-transform duration-300`}
                      />
                    ) : (
                      <span className={`w-6 h-6 rounded-full ${category.bgColor} group-hover:scale-125 transition-transform duration-300`} />
                    )}
                    <span className={`text-base font-medium ${category.color}`}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div 
            className="inline-block glass p-8 rounded-3xl shadow-2xl cursor-hover"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-6 max-w-2xl">
              Want to leverage these skills for your project? Let's collaborate!
            </p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-8 py-4 text-lg font-semibold rounded-2xl cursor-hover"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills