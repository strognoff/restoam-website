import { Link } from 'react-router-dom'

function Faq() {
  const faqs = [
    {
      question: 'What is RestoAM?',
      answer: 'RestoAM is a restaurant asset management platform that helps independent restaurants track equipment, manage maintenance work orders, and organize everything by location.',
    },
    {
      question: 'Who is RestoAM for?',
      answer: 'RestoAM is designed for independent restaurant owners, small hospitality groups, and operations managers who need a simple way to stay on top of maintenance and equipment tracking.',
    },
    {
      question: 'How does the free plan work?',
      answer: 'The Starter plan is completely free and includes up to 50 assets, unlimited work orders, and basic reporting. No credit card required.',
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes! You can change your plan at any time. Upgrades take effect immediately, and downgrades apply at the end of your billing period.',
    },
    {
      question: 'Do you offer a free trial for paid plans?',
      answer: 'Yes, we offer a 14-day free trial for the Pro plan. No credit card required to start.',
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'Starter plans include email support with a 48-hour response time. Pro plans get priority support with 24-hour response. Enterprise customers get dedicated support with SLA guarantees.',
    },
    {
      question: 'Can I import my existing data?',
      answer: 'Yes! We can help you import assets and locations from spreadsheets. Contact us for data migration assistance.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use industry-standard encryption, secure hosting, and regular backups. Your data is yours — we never sell it or share it.',
    },
    {
      question: 'Do you integrate with other systems?',
      answer: 'Pro plans include API access for custom integrations. Enterprise plans can include custom integrations with POS systems, accounting software, and more.',
    },
    {
      question: 'How do I get started?',
      answer: 'Simply fill out the contact form on our homepage or sign up directly. We\'ll help you get set up in minutes.',
    },
  ]

  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Everything you need to know about RestoAM.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h2>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Link to="/#contact" className="text-primary font-semibold hover:underline">
            Contact us →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Faq
