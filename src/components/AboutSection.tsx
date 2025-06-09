'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { AcademicCapIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Georgia Tech Community',
    description: 'Founded by Georgia Tech students and faculty who share a passion for outdoor adventures and creating memorable experiences.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Local Expertise',
    description: 'We know the best fishing spots within 100 miles of Atlanta, from hidden mountain streams to pristine lakes.',
    icon: MapPinIcon,
  },
  {
    name: 'Community Focused',
    description: 'Building a community of outdoor enthusiasts who value conservation, friendship, and the thrill of the catch.',
    icon: UsersIcon,
  },
]

export default function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="about" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16">
              <Image
                src="/assets/logo-icon.svg"
                alt="Flyology Georgia Logo"
                width={64}
                height={64}
                className="opacity-80"
              />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-accent-700">Flyology</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Born from a shared love of the outdoors and the Georgia Tech spirit of innovation, 
            Flyology brings together students, faculty, and the Atlanta community for unforgettable 
            fishing and boating adventures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Our Story
            </h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              What started as weekend fishing trips between Georgia Tech classmates has evolved 
              into a thriving outdoor recreation company. We believe that the best memories are 
              made in nature, surrounded by good friends and the peaceful rhythm of flowing water.
            </p>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Our mission is simple: to provide authentic, safe, and memorable outdoor experiences 
              that connect people with nature and with each other. Whether you're a seasoned angler 
              or have never held a fishing rod, we'll help you discover the joy of the outdoors.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-primary-50 px-4 py-2 rounded-full">
                <span className="text-primary-900 font-medium">Experienced Guides</span>
              </div>
              <div className="bg-primary-50 px-4 py-2 rounded-full">
                <span className="text-primary-900 font-medium">Safety First</span>
              </div>
              <div className="bg-primary-50 px-4 py-2 rounded-full">
                <span className="text-primary-900 font-medium">All Skill Levels</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-primary-100 rounded-brand overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                <p className="text-primary-800 text-lg font-medium">About Us Image</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">{feature.name}</h4>
              <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 