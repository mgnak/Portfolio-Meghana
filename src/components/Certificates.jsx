'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink, X, Star, Trophy, CheckCircle } from 'lucide-react'

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const certificates = [
    {
      id: 1,
      title: 'Google Cybersecurity Professional Certificate',
      issuer: 'Google',
      date: '2024',
      description: 'Comprehensive training in cybersecurity fundamentals, including network security, incident response, and risk management. Covers tools and techniques for protecting systems and data, with hands-on labs and real-world scenarios.',
      image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      credential: 'JL6ZWSL9JDXP',
      skills: ['Network Security', 'Incident Response', 'Risk Management', 'Cybersecurity Tools'],
      url: 'https://www.coursera.org/account/accomplishments/professional-cert/JL6ZWSL9JDXP',
      level: 'Professional',
      featured: true
    },
    {
      id: 2,
      title: 'Prompt Design in Vertex AI Skill Badge',
      issuer: 'Google Cloud',
      date: '2024',
      description: 'Focused on designing effective prompts for AI models in Google Cloud’s Vertex AI platform. Covers best practices for prompt engineering, optimizing model outputs, and integrating AI solutions into applications.',
      image: 'https://www.prointegrate.net/wp-content/uploads/2024/10/google-cloud-banner.jpg',
      credential: 'META-REACT-2023-045',
      skills: ['Prompt Engineering', 'Vertex AI', 'AI Model Optimization', 'Google Cloud'],
      url: 'https://www.credly.com/badges/3a770431-03e6-46e6-a2be-6b1afc1a4f59/public_url',
      level: 'Professional',
      featured: true
    },
    {
      id: 3,
      title: 'Software Engineer Intern - Certificate of Accomplishment',
      issuer: 'Hackerrank',
      date: '2023',
      description: 'Demonstrates proficiency in software engineering through practical coding challenges and projects. Focuses on scalable application development, emphasizing problem-solving and algorithmic skills.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/10/354785340/GA/BS/CK/63475444/hackerrank-software.png',
      credential: 'GCP-PD-2023-789',
      skills: ['Algorithm Design', 'Data Structures', 'Software Development', 'Problem Solving'],
      url: 'https://www.hackerrank.com/certificates/iframe/42dee8c6a085',
      level: 'Professional',
      featured: false
    },
    {
      id: 4,
      title: 'React Basics',
      issuer: 'Meta',
      date: '2024',
      description: 'Introduction to React development, covering components, hooks, and state management. Includes practical exercises for building interactive user interfaces with modern JavaScript practices.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      credential: 'META-REACT-2023-045',
      skills: ['React Components', 'Hooks', 'State Management', 'JavaScript'],
      url: 'https://www.coursera.org/account/accomplishments/verify/ETO7U46H7D2Y?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
      level: 'Associate',
      featured: false
    },
    {
      id: 5,
      title: 'Google AI Essentials',
      issuer: 'Coursera',
      date: '2024',
      description: 'Explores the fundamentals of artificial intelligence, including machine learning concepts, model training, and AI applications. Emphasizes practical use cases and ethical considerations in AI development.',
      image: 'https://www.shutterstock.com/image-vector/abstract-futuristic-digital-technology-background-600nw-2523603131.jpg',
      credential: 'MDB-DEV-2022-123',
      skills: ['Machine Learning', 'AI Ethics', 'Model Training', 'Data Analysis'],
      url: 'https://www.coursera.org/account/accomplishments/verify/Y6GMAC4LR8E8',
      level: 'Associate',
      featured: false
    },
    {
      id: 6,
      title: 'Flutter & Firebase Chat App: Master Flutter and Firebase',
      issuer: 'Udemy',
      date: '2024',
      description: 'Hands-on course on building a real-time chat application using Flutter and Firebase. Covers mobile app development, real-time database integration, and user authentication.',
      image: 'https://mdigitz.com/assets/img/blog/Malappuram_Flutter_Internship.jpg',
      credential: 'DCA-2022-987',
      skills: ['Flutter', 'Firebase', 'Mobile Development', 'Real-time Database'],
      url: 'https://www.udemy.com/certificate/UC-bb1e88b2-7fb4-4df0-9d21-fbf8d535c2b5/',
      level: 'Associate',
      featured: false
    }
]

  const featuredCertificates = certificates.filter(cert => cert.featured)
  const otherCertificates = certificates.filter(cert => !cert.featured)

  const getLevelColor = (level) => {
    switch (level) {
      case 'Professional':
        return 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
      case 'Associate':
        return 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white'
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white'
    }
  }

  const CertificateCard = ({ certificate, featured = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`glass rounded-2xl shadow-lg overflow-hidden card-hover cursor-pointer ${
        featured ? 'lg:col-span-2' : ''
      }`}
      onClick={() => setSelectedCertificate(certificate)}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="relative group overflow-hidden"> {/* Fixed: Changed from overflow-visible to overflow-hidden */}
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105 block" /* Added block for baseline stacking */
        />
        {/* Fixed: Added z-10 for overlay priority */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10"> {/* Added z-10 */}
          <div className="text-white text-center">
            <Award className="w-8 h-8 mx-auto mb-2" />
            <p className="font-semibold">View Details</p>
          </div>
        </div>
        
        {/* Fixed: Added z-20 for badges to stay above overlay */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-20"> {/* Added z-20 */}
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-800 dark:text-slate-200 px-2 py-1 rounded-full text-xs font-bold">
            {certificate.date}
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-bold ${getLevelColor(certificate.level)}`}>
            {certificate.level}
          </div>
        </div>

        {featured && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 z-20"> {/* Added z-20 */}
            <Star className="w-3 h-3 fill-current" />
            Featured
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2 cursor-hover">
          {certificate.title}
        </h3>
        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3 text-sm">
          {certificate.issuer}
        </p>
        <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed text-sm">
          {certificate.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {certificate.skills.slice(0, 3).map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
              className="px-2 py-1 glass rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 cursor-hover border border-white/30 dark:border-slate-600/30"
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.span>
          ))}
          {certificate.skills.length > 3 && (
            <span className="px-2 py-1 glass rounded-lg text-slate-600 dark:text-slate-400 text-xs font-medium border border-white/30 dark:border-slate-600/30">
              +{certificate.skills.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="certificates" className="py-16 section-bg-light dark:section-bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Certificates & Achievements
          </motion.h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Professional certifications validating my expertise and continuous learning
          </p>
        </motion.div>

        {/* Featured Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-8">
            <Trophy className="w-6 h-6 text-yellow-500" />
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
              Featured Certifications
            </h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {featuredCertificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} featured />
            ))}
          </div>
        </motion.div>

        {/* Other Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-8">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
              Additional Certifications
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCertificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        </motion.div>

        {/* Compact Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="glass p-8 rounded-2xl shadow-lg cursor-hover"
            whileHover={{ scale: 1.01, y: -3 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold gradient-text mb-1">{certificates.length}+</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">Certifications</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold gradient-text mb-1">50+</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">Skills Validated</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold gradient-text mb-1">100+</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">Hours Studied</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold gradient-text mb-1">5+</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">Platforms</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              className="glass rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <motion.button
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute top-4 right-4 p-2 glass rounded-xl text-white hover:bg-black/70 transition-all duration-300 cursor-hover"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={20} />
                </motion.button>
                
                <div className="absolute bottom-4 left-4 glass rounded-xl p-3">
                  <div className="flex items-center gap-2 text-white">
                    <Award size={20} />
                    <div>
                      <span className="font-bold">Certified {selectedCertificate.date}</span>
                      <div className={`inline-block ml-2 px-2 py-1 rounded-full text-xs font-bold ${getLevelColor(selectedCertificate.level)}`}>
                        {selectedCertificate.level}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                  {selectedCertificate.title}
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-3">
                  {selectedCertificate.issuer}
                </p>
                
                <div className="flex items-center gap-4 mb-4 text-slate-600 dark:text-slate-400 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>Issued {selectedCertificate.date}</span>
                  </div>
                  <div className="font-mono bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-xs">
                    {selectedCertificate.credential}
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {selectedCertificate.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-3">
                    Skills Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCertificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-2 glass rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-white/30 dark:border-slate-600/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <motion.a
                  href={selectedCertificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 w-fit px-6 py-3 font-semibold rounded-xl cursor-hover"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={18} />
                  Verify Certificate
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Certificates