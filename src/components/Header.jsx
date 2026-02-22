import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          RestoAM
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/pricing" className="text-gray-600 hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link to="/faq" className="text-gray-600 hover:text-primary transition-colors">
            FAQ
          </Link>
          <a 
            href="#contact" 
            className="bg-primary text-white px-5 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Get Started
          </a>
        </div>
        <button className="md:hidden text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
}

export default Header
