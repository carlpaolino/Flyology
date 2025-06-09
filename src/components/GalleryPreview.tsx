'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import { PhotoIcon } from '@heroicons/react/24/outline'

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1571168092102-c6b4f1df1dd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    alt: 'Successful fishing trip',
    category: 'Fishing'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1586104251819-ce4b8a64b6f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    alt: 'Fly fishing in mountain stream',
    category: 'Fly Fishing'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    alt: 'Peaceful boating excursion',
    category: 'Boating'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    alt: 'Beautiful sunset over lake',
    category: 'Scenery'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    alt: 'Happy group of adventurers',
    category: 'Community'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    alt: 'Proud angler with catch',
    category: 'Success'
  }
]

export default function GalleryPreview() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="gallery" className="section-padding bg-neutral-50">
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
              <svg width="64" height="64" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
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
            Adventure <span className="text-accent-700">Gallery</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Discover the beauty and excitement of our outdoor adventures through the eyes of our community. 
            Every photo tells a story of connection, achievement, and natural wonder.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group cursor-pointer overflow-hidden rounded-brand ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`relative ${index === 0 ? 'aspect-[4/3]' : 'aspect-square'} overflow-hidden`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <PhotoIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-accent-700 text-white px-2 py-1 rounded text-xs font-medium">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-neutral-600 mb-6">
            Want to see more? Explore our complete gallery of adventures and memories.
          </p>
          <Link
            href="/gallery"
            className="btn-primary"
          >
            View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 