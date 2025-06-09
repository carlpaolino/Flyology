'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface NewsletterFormData {
  email: string
  firstName?: string
}

export default function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubscribed, setHasSubscribed] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<NewsletterFormData>()

  useEffect(() => {
    // Check if user has already subscribed
    const hasSubscribedBefore = localStorage.getItem('flyology-newsletter-subscribed')
    if (hasSubscribedBefore) {
      setHasSubscribed(true)
      return
    }

    // Show modal after 10 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true)
    
    try {
      // TODO: Implement actual Mailchimp integration
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      localStorage.setItem('flyology-newsletter-subscribed', 'true')
      setHasSubscribed(true)
      setIsOpen(false)
      toast.success('Welcome to the Flyology community! Check your email for confirmation.')
      reset()
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeModal = () => {
    setIsOpen(false)
    // Don't show again for this session
    sessionStorage.setItem('flyology-newsletter-dismissed', 'true')
  }

  if (hasSubscribed) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="relative bg-white rounded-brand shadow-2xl max-w-md w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {/* Content */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
              <h3 className="text-2xl font-bold text-primary-900 mb-2">
                Stay In The Loop
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Get the latest updates on fishing trips, new locations, and exclusive offers 
                for the Georgia Tech community.
              </p>
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="newsletter-email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="newsletter-email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Please enter a valid email'
                    }
                  })}
                  className="form-input"
                  placeholder="your.email@gatech.edu"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="newsletter-firstName" className="block text-sm font-medium text-neutral-700 mb-2">
                  First Name (Optional)
                </label>
                <input
                  type="text"
                  id="newsletter-firstName"
                  {...register('firstName')}
                  className="form-input"
                  placeholder="Your first name"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
              </button>
            </form>

            {/* Privacy Note */}
            <p className="text-xs text-neutral-500 text-center mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 