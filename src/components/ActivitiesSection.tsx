'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const activities = [
  {
    id: 'fly-fishing',
    title: 'Fly Fishing',
    description: 'Master the elegant art of fly fishing in Georgia\'s pristine mountain streams and rivers. Perfect for beginners and experienced anglers alike.',
    image: 'https://images.unsplash.com/photo-1586104251819-ce4b8a64b6f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    features: ['Expert Instruction', 'Equipment Provided', 'Small Groups', 'Scenic Locations'],
    duration: 'Half Day / Full Day',
    price: 'Starting at $149',
    href: '/activities/fly-fishing'
  },
  {
    id: 'fishing',
    title: 'Conventional Fishing',
    description: 'Experience the thrill of conventional fishing in some of the best lakes and rivers around Atlanta. Great for all skill levels.',
    image: 'https://images.unsplash.com/photo-1571168092102-c6b4f1df1dd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    features: ['Guided Tours', 'Bait & Tackle Included', 'Photo Opportunities', 'Local Hotspots'],
    duration: 'Half Day / Full Day',
    price: 'Starting at $99',
    href: '/activities/fishing'
  },
  {
    id: 'boating',
    title: 'Boating Adventures',
    description: 'Explore crystal-clear lakes and peaceful rivers with our guided boating excursions. Perfect for groups and team building.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    features: ['Professional Captain', 'Safety Equipment', 'Scenic Routes', 'Group Friendly'],
    duration: '2-8 Hours',
    price: 'Starting at $199',
    href: '/activities/boating'
  }
]

export default function ActivitiesSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="activities" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 opacity-80">
              <svg width="64" height="64" viewBox="0 0 60 60" xmlns="logo-icon.svg">
                <path fill="#1B5E20" d="M8 42C8 28 14 18 22 12C28 10 34 10 40 12C46 10 52 10 58 12C58 18 56 24 54 30C52 36 48 42 44 46C40 50 36 52 32 50C28 48 24 46 22 42C20 40 18 38 16 40C14 42 12 44 10 42C8 40 8 42 8 42Z"/>
                <path fill="#F5F5DC" d="M18 22L19.5 26L24 26L20.5 29L22 33L18 30L14 33L15.5 29L12 26L16.5 26Z"/>
                <path fill="#F5F5DC" stroke="#1B5E20" strokeWidth="1" d="M15 28C15 26 17 25 20 25C25 25 30 26 33 28C35 29 36 30 36 31C36 32 35 33 33 34C30 35 25 36 20 36C17 36 15 35 15 33C15 31 15 29 15 28Z"/>
                <circle cx="20" cy="30" r="0.8" fill="#1B5E20"/>
                <circle cx="23" cy="29" r="0.6" fill="#1B5E20"/>
                <circle cx="26" cy="31" r="0.7" fill="#1B5E20"/>
                <circle cx="29" cy="30" r="0.6" fill="#1B5E20"/>
                <circle cx="32" cy="29" r="0.5" fill="#1B5E20"/>
                <path fill="#F5F5DC" stroke="#1B5E20" strokeWidth="1" d="M15 40C15 38 17 37 21 37C27 37 33 38 37 40C39 41 40 42 40 43C40 44 39 45 37 46C33 47 27 48 21 48C17 48 15 47 15 45C15 43 15 41 15 40Z"/>
                <path d="M19 40L21 41L23 40L25 41L27 40L29 41L31 40L33 41L35 40" stroke="#1B5E20" strokeWidth="0.6" fill="none"/>
                <path d="M19 43L21 42L23 43L25 42L27 43L29 42L31 43L33 42L35 43" stroke="#1B5E20" strokeWidth="0.6" fill="none"/>
              </svg>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-accent-700">Activities</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Choose your adventure from our carefully curated outdoor experiences. 
            Each activity is designed to provide unforgettable memories while 
            respecting and preserving our natural environment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="card group overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-accent-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {activity.duration}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-700 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {activity.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-primary-900 mb-2">What's Included:</h4>
                  <ul className="grid grid-cols-2 gap-1">
                    {activity.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-neutral-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent-700 rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-primary-900">
                    {activity.price}
                  </span>
                </div>
                
                <Link
                  href={activity.href}
                  className="btn-primary w-full text-center inline-flex items-center justify-center group"
                >
                  Learn More
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-neutral-600 mb-6">
            Can't decide? Contact us for a custom adventure tailored to your group's interests.
          </p>
          <Link
            href="/contact"
            className="btn-outline"
          >
            Plan Custom Trip
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 