'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

const contactInfo = [
  {
    icon: MapPinIcon,
    title: 'Location',
    details: ['Georgia Tech Campus', 'Atlanta, GA 30332']
  },
  {
    icon: PhoneIcon,
    title: 'Phone',
    details: ['(404) 555-FISH', '(404) 555-3474']
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    details: ['info@flyology.com', 'bookings@flyology.com']
  }
]

export default function ContactSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // TODO: Implement actual form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success('Message sent successfully! We\'ll get back to you soon.')
      reset()
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-white">
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
            Get In <span className="text-accent-700">Touch</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Ready to embark on your next adventure? Have questions about our activities? 
            We'd love to hear from you and help plan your perfect outdoor experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-1">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-neutral-600">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 p-6 bg-primary-50 rounded-brand"
            >
              <h4 className="font-semibold text-primary-900 mb-2">Office Hours</h4>
              <div className="space-y-1 text-neutral-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 8:00 AM - 8:00 PM</p>
                <p>Sunday: 8:00 AM - 6:00 PM</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="form-input"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Please enter a valid email'
                      }
                    })}
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject', { required: 'Subject is required' })}
                  className="form-input"
                  placeholder="What is this regarding?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register('message', { required: 'Message is required' })}
                  className="form-input"
                  placeholder="Tell us about your adventure plans or questions..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 