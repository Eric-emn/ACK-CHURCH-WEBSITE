'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: 'Sarah W.',
    role: 'KAMA Ministry Leader',
    quote:
      'Being part of the KAMA Ministry has truly enriched my spiritual walk. It’s a place of compassion, connection, and deep prayer. I’m grateful to lead and grow with others.',
  },
  {
    name: 'David M.',
    role: 'Youth Ministry Leader',
    quote:
      'The Youth Ministry has shaped my leadership and deepened my relationship with Christ. It’s inspiring to see young people passionately seeking God.',
  },
  {
    name: 'Ruth N.',
    role: 'Mothers’ Union Member',
    quote:
      'Through the Mothers’ Union, I’ve found strength in sisterhood, grown in wisdom, and learned how to build a God-centered family life.',
  },
  {
    name: 'James K.',
    role: 'Choir Ministry Member',
    quote:
      'The Choir Ministry has been more than music—it’s worship, growth, and powerful fellowship. Lifting voices together brings heaven closer.',
  },
]

export default function ChurchMinistries() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Testimonies from Our Ministries</h2>
        <p className="text-gray-600 mb-10">Hear how God is transforming lives through various ministries in our church.</p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 shadow-lg rounded-lg max-w-xl mx-auto">
                <p className="text-lg text-gray-700 italic">“{testimonial.quote}”</p>
                <div className="mt-6">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
