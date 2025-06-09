'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ActivitiesSection from '@/components/ActivitiesSection'
import StatsSection from '@/components/StatsSection'
import GalleryPreview from '@/components/GalleryPreview'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import NewsletterModal from '@/components/NewsletterModal'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
        <StatsSection />
        <GalleryPreview />
        <ContactSection />
      </main>
      <Footer />
      <NewsletterModal />
    </motion.div>
  )
} 