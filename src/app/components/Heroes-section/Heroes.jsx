'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  CalendarDaysIcon,
  BookOpenIcon,
  UsersIcon,
  HandRaisedIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const ministries = [
  {
    name: 'Youth Ministry',
    description: 'Empowering young believers to grow in faith and purpose.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Worship Team',
    description: 'Leading others into God’s presence through music and praise.',
    href: '#',
    icon: HeartIcon,
  },
  {
    name: 'Prayer Ministry',
    description: 'Standing in the gap through intercession and support.',
    href: '#',
    icon: HandRaisedIcon,
  },
  {
    name: 'Bible Study Groups',
    description: 'Weekly small groups to dive deeper into the Word.',
    href: '#',
    icon: BookOpenIcon,
  },
]

export default function Heroes() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow">
      <nav className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="text-xl font-bold text-indigo-700">
            Grace Fellowship Church
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center p-2 text-gray-700 hover:text-indigo-600"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-10">
          <a href="#sermons" className="text-sm font-semibold leading-6 text-gray-700 hover:text-indigo-700">
            Sermons
          </a>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-700 hover:text-indigo-700">
              Ministries
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            </PopoverButton>
            <PopoverPanel className="absolute top-full left-0 mt-3 w-screen max-w-md bg-white shadow-lg ring-1 ring-gray-200 rounded-lg p-4">
              {ministries.map((item) => (
                <div key={item.name} className="group flex gap-x-4 p-2 hover:bg-gray-50 rounded-md">
                  <item.icon className="h-6 w-6 text-indigo-600" />
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                    </a>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </PopoverPanel>
          </Popover>
          <a href="#events" className="text-sm font-semibold leading-6 text-gray-700 hover:text-indigo-700">
            Events
          </a>
          <a href="#about" className="text-sm font-semibold leading-6 text-gray-700 hover:text-indigo-700">
            About Us
          </a>
          <a href="#contact" className="text-sm font-semibold leading-6 text-gray-700 hover:text-indigo-700">
            Contact
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#visit" className="text-sm font-semibold leading-6 text-indigo-600 hover:underline">
            Plan Your Visit →
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10 bg-black/20" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full max-w-sm bg-white shadow-xl p-6">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-bold text-indigo-700">Grace Fellowship Church</a>
            <button onClick={() => setMobileMenuOpen(false)} className="text-gray-700">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6">
            <a href="#sermons" className="block py-2 text-sm font-semibold text-gray-700 hover:text-indigo-600">Sermons</a>
            <Disclosure>
              <DisclosureButton className="w-full flex justify-between items-center py-2 text-sm font-semibold text-gray-700 hover:text-indigo-600">
                Ministries
                <ChevronDownIcon className="h-5 w-5" />
              </DisclosureButton>
              <DisclosurePanel className="pl-4 space-y-1">
                {ministries.map((item) => (
                  <a key={item.name} href={item.href} className="block text-sm text-gray-600 hover:text-indigo-600">
                    {item.name}
                  </a>
                ))}
              </DisclosurePanel>
            </Disclosure>
            <a href="#events" className="block py-2 text-sm font-semibold text-gray-700 hover:text-indigo-600">Events</a>
            <a href="#about" className="block py-2 text-sm font-semibold text-gray-700 hover:text-indigo-600">About Us</a>
            <a href="#contact" className="block py-2 text-sm font-semibold text-gray-700 hover:text-indigo-600">Contact</a>
            <a href="#visit" className="mt-4 block text-indigo-600 font-semibold">Plan Your Visit →</a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
