'use client'

import Link from 'next/link'
import Image from 'next/image'

const navigation = {
  main: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Goal', href: '/goal' },
    { name: 'Activities', href: '/activities' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ],
  activities: [
    { name: 'Fly Fishing', href: '/activities/fly-fishing' },
    { name: 'Conventional Fishing', href: '/activities/fishing' },
    { name: 'Boating Adventures', href: '/activities/boating' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Safety Guidelines', href: '/safety' },
  ],
}

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.017 0C8.396 0 7.929.01 6.71.058 5.487.107 4.657.167 3.939.277 3.179.394 2.535.55 1.892 1.192 1.25 1.834 1.094 2.478.977 3.238.867 3.956.807 4.786.758 6.009.71 7.228.7 7.695.7 11.316c0 3.62.01 4.087.058 5.306.049 1.223.109 2.053.219 2.771.117.76.273 1.404.915 2.046.642.642 1.286.798 2.046.915.718.11 1.548.17 2.771.219 1.219.048 1.686.058 5.306.058 3.62 0 4.087-.01 5.306-.058 1.223-.049 2.053-.109 2.771-.219.76-.117 1.404-.273 2.046-.915.642-.642.798-1.286.915-2.046.11-.718.17-1.548.219-2.771.048-1.219.058-1.686.058-5.306 0-3.62-.01-4.087-.058-5.306-.049-1.223-.109-2.053-.219-2.771-.117-.76-.273-1.404-.915-2.046C20.522 1.25 19.878 1.094 19.118.977 18.4.867 17.57.807 16.347.758 15.128.71 14.661.7 11.04.7h.976zm-.056 5.417c-3.631 0-6.583 2.952-6.583 6.583 0 3.631 2.952 6.583 6.583 6.583 3.631 0 6.583-2.952 6.583-6.583 0-3.631-2.952-6.583-6.583-6.583zm0 10.833c-2.347 0-4.25-1.903-4.25-4.25 0-2.347 1.903-4.25 4.25-4.25 2.347 0 4.25 1.903 4.25 4.25 0 2.347-1.903 4.25-4.25 4.25zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-32 h-8 relative">
                  <Image
                    src="/assets/logo-placeholder.svg"
                    alt="Flyology Logo"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
              </Link>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Georgia Tech's premier outdoor recreation company, creating unforgettable 
                fishing and boating adventures for students, faculty, and the greater Atlanta community.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-neutral-300 hover:text-accent-400 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Navigation</h3>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-neutral-300 hover:text-accent-400 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Activities Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Activities</h3>
              <ul className="space-y-3">
                {navigation.activities.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-neutral-300 hover:text-accent-400 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Legal Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <div className="space-y-3 text-neutral-300 mb-6">
                <p>Georgia Tech Campus</p>
                <p>Atlanta, GA 30332</p>
                <p>(404) 555-FISH</p>
                <p>info@flyology.com</p>
              </div>
              
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-neutral-300 hover:text-accent-400 transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-neutral-300 text-sm">
            <p>&copy; 2024 Flyology. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Made with ❤️ by the Georgia Tech community
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 