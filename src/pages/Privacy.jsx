import { Link } from 'react-router-dom'

function Privacy() {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg text-gray-600">
          <p className="text-sm text-gray-500 mb-8">Last updated: February 2026</p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p>
            RestoAM ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our restaurant asset management platform.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
          <p>We may collect information about you in various ways, including:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Personal Data:</strong> Name, email address, phone number, and restaurant name when you register or contact us.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our platform, including pages visited and features used.</li>
            <li><strong>Device Data:</strong> Browser type, IP address, device type, and operating system.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Provide, operate, and maintain our platform</li>
            <li>Improve, personalize, and expand our services</li>
            <li>Understand and analyze how you use our platform</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you for customer service and updates</li>
            <li>Send you marketing and promotional communications (with your consent)</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Request data portability</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Third-Party Services</h2>
          <p>
            We may use third-party services for analytics, hosting, and email delivery. These providers have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mt-4">
            <strong>Email:</strong> privacy@restoam.com
          </p>
        </div>

        <div className="mt-12">
          <Link to="/" className="text-primary font-semibold hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Privacy
