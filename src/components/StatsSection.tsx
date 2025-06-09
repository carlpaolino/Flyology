'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

const stats = [
  {
    id: 1,
    value: 500,
    suffix: '+',
    label: 'Fish Caught',
    description: 'Happy catches by our community'
  },
  {
    id: 2,
    value: 150,
    suffix: '+',
    label: 'Adventures Completed',
    description: 'Successful trips and counting'
  },
  {
    id: 3,
    value: 95,
    suffix: '%',
    label: 'Satisfaction Rate',
    description: 'Customer satisfaction guaranteed'
  },
  {
    id: 4,
    value: 12,
    suffix: '',
    label: 'Expert Guides',
    description: 'Professional and experienced'
  }
]

function AnimatedCounter({ 
  value, 
  duration = 2000, 
  inView 
}: { 
  value: number; 
  duration?: number; 
  inView: boolean;
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * value)
      
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [value, duration, inView])

  return <span>{count}</span>
}

export default function StatsSection() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section className="section-padding bg-primary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 opacity-60">
              <svg width="64" height="64" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F5F5DC" d="M8 42C8 28 14 18 22 12C28 10 34 10 40 12C46 10 52 10 58 12C58 18 56 24 54 30C52 36 48 42 44 46C40 50 36 52 32 50C28 48 24 46 22 42C20 40 18 38 16 40C14 42 12 44 10 42C8 40 8 42 8 42Z"/>
                <path fill="#FBC02D" d="M18 22L19.5 26L24 26L20.5 29L22 33L18 30L14 33L15.5 29L12 26L16.5 26Z"/>
                <path fill="#F5F5DC" stroke="#FBC02D" strokeWidth="1" d="M15 28C15 26 17 25 20 25C25 25 30 26 33 28C35 29 36 30 36 31C36 32 35 33 33 34C30 35 25 36 20 36C17 36 15 35 15 33C15 31 15 29 15 28Z"/>
                <circle cx="20" cy="30" r="0.8" fill="#FBC02D"/>
                <circle cx="23" cy="29" r="0.6" fill="#FBC02D"/>
                <circle cx="26" cy="31" r="0.7" fill="#FBC02D"/>
                <circle cx="29" cy="30" r="0.6" fill="#FBC02D"/>
                <circle cx="32" cy="29" r="0.5" fill="#FBC02D"/>
                <path fill="#F5F5DC" stroke="#FBC02D" strokeWidth="1" d="M15 40C15 38 17 37 21 37C27 37 33 38 37 40C39 41 40 42 40 43C40 44 39 45 37 46C33 47 27 48 21 48C17 48 15 47 15 45C15 43 15 41 15 40Z"/>
                <path d="M19 40L21 41L23 40L25 41L27 40L29 41L31 40L33 41L35 40" stroke="#FBC02D" strokeWidth="0.6" fill="none"/>
                <path d="M19 43L21 42L23 43L25 42L27 43L29 42L31 43L33 42L35 43" stroke="#FBC02D" strokeWidth="0.6" fill="none"/>
              </svg>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our <span className="text-accent-400">Impact</span>
          </h2>
          <p className="text-lg text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            Numbers tell our story of success, community building, and unforgettable outdoor experiences 
            shared with the Georgia Tech community and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-400 mb-2"
                >
                  <AnimatedCounter value={stat.value} inView={inView} />
                  {stat.suffix}
                </motion.div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-neutral-300 text-sm md:text-base">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-neutral-200 mb-6 text-lg">
            Ready to become part of our growing community?
          </p>
          <motion.a
            href="/signup"
            className="btn-secondary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Community
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 