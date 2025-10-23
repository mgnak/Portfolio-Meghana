'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, X, Star, Code, Zap } from 'lucide-react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Speech Emotion Recognition',
      description: 'A machine learning-based solution for recognizing emotions in speech using CNN and RNN models, developed on Kaggle and Google Colab.',
      longDescription: 'This project leverages advanced machine learning techniques to detect emotions in speech audio. It uses Convolutional Neural Networks (CNN) and Recurrent Neural Networks (RNN) to analyze audio features, providing accurate emotion classification. Developed using Kaggle and Google Colab for data processing and model training.',
      tech: ['Machine Learning', 'CNN', 'RNN', 'Kaggle', 'Google Colab'],
      image: 'https://media.istockphoto.com/id/1923678021/photo/voice-recording-man-touching-microphone-icon-on-smart-phone-mobile-application-record-sound.jpg?s=2048x2048&w=is&k=20&c=8XM9IitZIYGhi_kXzw-POdcwGJM_XJ2mtdjJCvsH5WA=',
      github: 'https://github.com/yourusername/speech-emotion-recognition',
      demo: 'https://speech-emotion-demo.vercel.app',
      featured: true,
      status: 'Live',
      category: 'Machine Learning'
    },
    {
      id: 2,
      title: 'Vitamin Deficiency Detection',
      description: 'A machine learning application for detecting vitamin deficiencies using CNN and RNN, built on Google Colab.',
      longDescription: 'This project uses machine learning to identify vitamin deficiencies based on input data, employing CNN and RNN models for accurate predictions. Developed on Google Colab, it includes data preprocessing, model training, and evaluation for healthcare applications.',
      tech: ['Machine Learning', 'CNN', 'RNN', 'Google Colab'],
      image: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/yourusername/vitamin-deficiency-detection',
      demo: 'https://vitamin-deficiency-demo.vercel.app',
      featured: true,
      status: 'Live',
      category: 'Machine Learning'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, built using React, Spring Boot, and WebSocket technology.',
      longDescription: 'Designed for teams to collaborate effectively, this task management app features real-time updates, drag-and-drop functionality, file attachments, and comprehensive project analytics. Built with modern technologies to ensure scalability and performance.',
      tech: ['React', 'Spring Boot', 'PostgreSQL', 'WebSocket', 'Material-UI'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://taskmanager-demo.vercel.app',
      featured: true,
      status: 'Live',
      category: 'Full Stack'
    },
    {
      id: 4,
      title: 'Expense Tracker',
      description: 'A full-stack expense tracking application built with Java, Spring Boot, React.js, and MySQL for personal finance management.',
      longDescription: 'This expense tracker allows users to manage their finances by tracking income and expenses, categorizing transactions, and generating reports. Built with Java, Spring Boot, React.js, and MySQL, it ensures robust performance and a user-friendly interface.',
      tech: ['Java', 'Spring Boot', 'React.js', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://github.com/yourusername/expense-tracker',
      demo: 'https://expense-tracker-demo.vercel.app',
      featured: false,
      status: 'Live',
      category: 'Full Stack'
    },
    {
      id: 5,
      title: 'Job Portal',
      description: 'A user-friendly job portal with a focus on UI/UX design, enabling job seekers and employers to connect seamlessly.',
      longDescription: 'This job portal offers an intuitive interface for job seekers to browse opportunities and for employers to post jobs. The project emphasizes exceptional UI/UX design, ensuring accessibility, responsiveness, and a seamless user experience across devices.',
      tech: ['UI/UX Design', 'Prototyping', 'Figma', 'Adobe XD'],
      image: 'https://cdn.dribbble.com/userupload/8151513/file/original-f17a064d24ac2423bc6ec7652f93035a.jpg?resize=400x0',
      github: 'https://github.com/yourusername/job-portal',
      demo: 'https://job-portal-demo.vercel.app',
      featured: false,
      status: 'Live',
      category: 'UI/UX Design'
    },
    {
      id: 6,
      title: 'E-Learning Portal',
      description: 'A modern e-learning platform with a focus on UI/UX design, offering a seamless learning experience for students and educators.',
      longDescription: 'This e-learning platform provides a user-friendly environment for online education, featuring course management, interactive quizzes, and progress tracking. The project prioritizes UI/UX design to ensure an engaging and accessible experience for all users.',
      tech: ['UI/UX Design', 'Prototyping', 'Figma', 'Adobe XD'],
      image: 'https://cdn.dribbble.com/userupload/4625577/file/still-44307d3c41581af28cbb1d22448df5b4.png?format=webp&resize=400x300&vertical=center',
      github: 'https://github.com/yourusername/elearning-portal',
      demo: 'https://elearning-portal-demo.vercel.app',
      featured: false,
      status: 'Live',
      category: 'UI/UX Design'
    }
]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live':
        return 'bg-green-500 text-white'
      case 'In Development':
        return 'bg-yellow-500 text-white'
      default:
        return 'bg-blue-500 text-white'
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Full Stack':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
      case 'Frontend':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
      case 'Mobile':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
      default:
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300'
    }
  }

  const ProjectCard = ({ project, featured = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`glass rounded-3xl shadow-xl overflow-hidden card-hover cursor-hover ${
        featured ? 'lg:col-span-2' : ''
      }`}
      whileHover={{ scale: 1.02, y: -10 }}
    >
      <div className="relative group overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6 z-10">
          <motion.button
            onClick={() => setSelectedProject(project)}
            className="btn-primary px-8 py-3 text-lg font-semibold rounded-2xl flex items-center gap-3 cursor-hover shadow-2xl bg-opacity-90"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-5 h-5" />
            View Details
          </motion.button>
        </div>
        
        <div className="absolute top-4 left-4 flex gap-2 z-20">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(project.category)}`}>
            {project.category}
          </span>
        </div>

        {featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 z-20">
            <Star className="w-4 h-4 fill-current" />
            Featured
          </div>
        )}
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-bold text-black dark:text-slate-200 mb-3 cursor-hover project-title">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-lg">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3 mb-6">
          {project.tech.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
              className="px-4 py-2 glass rounded-2xl text-sm font-semibold text-slate-700 dark:text-slate-300 cursor-hover border border-white/30 dark:border-slate-600/30"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <motion.button
            className="flex items-center gap-2 px-6 py-3 glass rounded-2xl text-slate-600 dark:text-slate-400 opacity-50 cursor-not-allowed"
            disabled
            aria-disabled="true"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            Code
          </motion.button>
          <motion.button
            className="flex items-center gap-2 px-6 py-3 glass rounded-2xl text-slate-600 dark:text-slate-400 opacity-50 cursor-not-allowed"
            disabled
            aria-disabled="true"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={20} />
            Demo
          </motion.button>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="projects" className="py-24 section-bg-light dark:section-bg-dark">
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
            Featured Projects
          </motion.h2>
          <p className="text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-12">
            <Star className="w-8 h-8 text-yellow-500 fill-current" />
            <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
              Featured Work
            </h3>
            <Star className="w-8 h-8 text-yellow-500 fill-current" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Code className="w-8 h-8 text-blue-500" />
            <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
              More Projects
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>

        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              className="glass rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-3 glass rounded-2xl text-white hover:bg-black/70 transition-all duration-300 cursor-hover"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={24} />
                </motion.button>
                
                <div className="absolute bottom-6 left-6 flex gap-3">
                  <span className={`px-4 py-2 rounded-2xl text-sm font-bold ${getStatusColor(selectedProject.status)}`}>
                    {selectedProject.status}
                  </span>
                  <span className={`px-4 py-2 rounded-2xl text-sm font-bold ${getCategoryColor(selectedProject.category)}`}>
                    {selectedProject.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-xl">
                  {selectedProject.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-5 py-3 glass rounded-2xl font-semibold text-slate-700 dark:text-slate-300 border border-white/30 dark:border-slate-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.button
                    className="btn-primary flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-2xl opacity-50 cursor-not-allowed"
                    disabled
                    aria-disabled="true"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={24} />
                    View Code
                  </motion.button>
                  <motion.button
                    className="btn-secondary flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-2xl opacity-50 cursor-not-allowed"
                    disabled
                    aria-disabled="true"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={24} />
                    Live Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects