import { Link } from 'react-router-dom'

function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: '',
      description: 'For single-location restaurants just getting started.',
      features: [
        'Up to 50 assets',
        'Unlimited work orders',
        '1 location',
        'Basic reporting',
        'Email support',
      ],
      cta: 'Start Free',
      highlight: false,
    },
    {
      name: 'Pro',
      price: '£29',
      period: '/month',
      description: 'For growing restaurants with multiple locations.',
      features: [
        'Unlimited assets',
        'Unlimited work orders',
        'Up to 5 locations',
        'Priority support',
        'Custom fields',
        'API access',
      ],
      cta: 'Start Free Trial',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For hospitality groups with complex needs.',
      features: [
        'Everything in Pro',
        'Unlimited locations',
        'SSO / SAML',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee',
      ],
      cta: 'Contact Us',
      highlight: false,
    },
  ]

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">Start free. Scale when you're ready.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.highlight
                  ? 'bg-primary text-white ring-4 ring-primary ring-offset-4'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <h2 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h2>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={plan.highlight ? 'text-blue-200' : 'text-gray-500'}>{plan.period}</span>
              </div>
              <p className={`text-sm mb-6 ${plan.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-blue-200' : 'text-green-500'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={plan.highlight ? 'text-blue-100' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlight
                    ? 'bg-white text-primary hover:bg-gray-100'
                    : 'bg-primary text-white hover:bg-primary-dark'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Teaser */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Have questions?</p>
          <Link to="/faq" className="text-primary font-semibold hover:underline">
            View Frequently Asked Questions →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Pricing
