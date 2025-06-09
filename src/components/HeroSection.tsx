'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Welcome to Flyology',
    subtitle: 'Georgia Tech\'s Premier Outdoor Recreation Company',
    description: 'Join us for unforgettable fly-fishing, conventional fishing, and boating experiences in the most pristine waters around Atlanta.',
    cta: 'Start Your Journey',
    ctaLink: '/signup'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1586104251819-ce4b8a64b6f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Flyology: Master the Art',
    subtitle: 'Learn from Expert Guides',
    description: 'Discover the serene beauty of fly fishing with our experienced guides in Georgia\'s most beautiful locations.',
    cta: 'Learn More',
    ctaLink: '/activities/fly-fishing'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Explore Waters with Flyology',
    subtitle: 'Boating Adventures Await',
    description: 'Navigate through crystal-clear lakes and rivers while enjoying the peaceful sounds of nature.',
    cta: 'View Activities',
    ctaLink: '/activities'
  }
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-screen min-h-[600px] max-h-[800px] overflow-hidden">
      {/* Hero Carousel */}
      <div className="relative h-full">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            initial={{ scale: 1.1 }}
            animate={{ scale: index === currentSlide ? 1 : 1.1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover parallax-bg"
                priority={index === 0}
                sizes="100vw"
              />
              <div className="absolute inset-0 hero-gradient" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container-custom text-center text-white px-4">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            {/* Large Prominent Logo */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <img 
                src="/assets/logo-placeholder.svg" 
                alt="Flyology Georgia Tech Outdoors" 
                className="w-32 md:w-48 lg:w-64 h-auto mx-auto filter drop-shadow-2xl"
              />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base md:text-lg font-medium mb-3 text-accent-400"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.h2>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow leading-tight"
            >
              {heroSlides[currentSlide].title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-base md:text-lg mb-6 text-neutral-100 max-w-xl mx-auto leading-relaxed"
            >
              {heroSlides[currentSlide].description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-2"
            >
              <Link
                href={heroSlides[currentSlide].ctaLink}
                className="btn-primary text-base px-6 py-3 animate-wave"
              >
                {heroSlides[currentSlide].cta}
              </Link>
              <Link
                href="/activities"
                className="btn-outline text-base px-6 py-3 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-900"
              >
                View All Activities
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 group"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 group"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-accent-400 scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/70 text-center"
        >
          <p className="text-sm mb-2">Scroll to explore</p>
          <div className="w-px h-8 bg-white/50 mx-auto"></div>
        </motion.div>
      </motion.div>
    </section>
  )
} 