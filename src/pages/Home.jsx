import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', restaurant: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, this would send to a backend
    console.log('Lead captured:', formData)
    setSubmitted(true)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stop Losing Track of Repairs and Equipment
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            RestoAM helps independent restaurants track assets, manage maintenance, and stay organized — so you can focus on running your restaurant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors">
              Start Free Trial
            </a>
            <Link to="/pricing" className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            The Maintenance Chaos is Real
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="font-semibold text-lg mb-2">Lost Work Orders</h3>
              <p className="text-gray-600">Requests come in via text, email, napkin notes — and get lost in the shuffle.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">❓</div>
              <h3 className="font-semibold text-lg mb-2">Equipment Blind Spots</h3>
              <p className="text-gray-600">No single view of what equipment you have, where it is, or when it was last serviced.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="font-semibold text-lg mb-2">Reactive Repairs</h3>
              <p className="text-gray-600">Emergency calls cost more. Planned maintenance saves money and prevents downtime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything You Need to Stay on Top
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mb-4">📋</div>
              <h3 className="font-semibold text-lg mb-2">Asset Tracking</h3>
              <p className="text-gray-600 text-sm">Catalog all your equipment, track locations, values, and warranties.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl mb-4">🎫</div>
              <h3 className="font-semibold text-lg mb-2">Work Orders</h3>
              <p className="text-gray-600 text-sm">Create, assign, and track maintenance requests from start to finish.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl mb-4">📍</div>
              <h3 className="font-semibold text-lg mb-2">Location Management</h3>
              <p className="text-gray-600 text-sm">Organize assets and work orders by location for multi-site visibility.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-2xl mb-4">🔔</div>
              <h3 className="font-semibold text-lg mb-2">Status Tracking</h3>
              <p className="text-gray-600 text-sm">See what's open, in progress, or done. Never lose track of a request.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-500 mb-6">Trusted by independent restaurants</p>
          <div className="flex justify-center gap-8 opacity-50">
            <div className="w-24 h-12 bg-gray-200 rounded"></div>
            <div className="w-24 h-12 bg-gray-200 rounded"></div>
            <div className="w-24 h-12 bg-gray-200 rounded"></div>
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section id="contact" className="py-16 bg-primary">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Organized?
          </h2>
          <p className="text-blue-100 mb-8">
            Start your free trial today. No credit card required.
          </p>
          {submitted ? (
            <div className="bg-white/10 rounded-xl p-8">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-semibold text-white mb-2">Thanks for your interest!</h3>
              <p className="text-blue-100">We'll be in touch soon to get you started.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg text-left">
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="you@restaurant.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Restaurant Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your restaurant name"
                  value={formData.restaurant}
                  onChange={(e) => setFormData({ ...formData, restaurant: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Start Free Trial
              </button>
              <p className="text-center text-gray-500 text-sm mt-4">
                14-day free trial • No credit card required
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home
