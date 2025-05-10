import React from 'react'

function Ending() {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-200 py-12">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
    {/* Mission Statement */}
    <div>
      <h3 className="text-lg font-semibold text-white">Our Mission</h3>
      <p className="mt-4 text-sm leading-relaxed text-gray-400">
        To glorify God by making disciples of Jesus Christ who passionately love God,
        deeply love people, and boldly live out the Gospel in our community and beyond.
      </p>
    </div>

    {/* Navigation */}
    <div>
      <h3 className="text-lg font-semibold text-white">Quick Links</h3>
      <ul className="mt-4 space-y-2 text-sm">
        <li><a href="/about" className="hover:underline">About Us</a></li>
        <li><a href="/sermons" className="hover:underline">Sermons</a></li>
        <li><a href="/events" className="hover:underline">Events</a></li>
        <li><a href="/ministries" className="hover:underline">Ministries</a></li>
        <li><a href="/contact" className="hover:underline">Contact</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-lg font-semibold text-white">Contact Us</h3>
      <p className="mt-4 text-sm text-gray-400">
        <strong>Location:</strong><br />
        123 Grace Street<br />
        YourCity, ST 12345
      </p>
      <p className="mt-4 text-sm text-gray-400">
        <strong>Email:</strong><br />
        <a href="mailto:info@yourchurch.org" className="hover:underline">info@yourchurch.org</a>
      </p>
      <p className="mt-2 text-sm text-gray-400">
        <strong>Phone:</strong><br />
        (123) 456-7890
      </p>
    </div>

    {/* Social & Newsletter */}
    <div>
      <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
      <div className="mt-4 flex space-x-4">
        <a href="#" aria-label="Facebook" className="hover:text-white">📘</a>
        <a href="#" aria-label="Instagram" className="hover:text-white">📸</a>
        <a href="#" aria-label="YouTube" className="hover:text-white">📺</a>
        <a href="#" aria-label="Twitter" className="hover:text-white">🐦</a>
      </div>
      <form className="mt-6">
        <label htmlFor="newsletter" className="block text-sm mb-2">Subscribe to our newsletter</label>
        <div className="flex">
          <input
            id="newsletter"
            type="email"
            placeholder="Your email"
            className="w-full px-3 py-2 rounded-l-md bg-gray-800 border border-gray-700 text-sm placeholder-gray-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-r-md"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  </div>

  {/* Copyright */}
  <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
    &copy; {new Date().getFullYear()} Your Church Name. All rights reserved.
  </div>
</footer>

    </div>
  )
}

export default Ending
