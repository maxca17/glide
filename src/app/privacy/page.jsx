import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Heading } from '@/components/text'

export default function PrivacyPage() {
  return (
    <div className="overflow-hidden">
      <main className="py-32">
        <Container>
          <Heading as="h1" className="mb-8">
            Glide Global Inc. – Privacy Policy
          </Heading>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-sm text-gray-500 mb-8">
              <strong>Effective Date:</strong> November 28, 2025
            </p>
            <p className="mb-8">
              Glide Global Inc. ("Glide," "we," "our," or "us") provides a platform that connects accounting and finance talent with firms seeking fractional or project-based support ("Platform"). This Privacy Policy explains how we collect, use, and protect information from users of our website (glideglobal.co) and Platform (app.try-glide.com) (together, the "Services").
            </p>
            <p className="mb-8">
              By using our Services, you agree to this Privacy Policy. If you do not agree, please discontinue use of our Services.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect the following types of information:</p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">1.1 Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Account Information:</strong> When you create an account, we collect your name, email address, phone number, and password.</li>
              <li><strong>Talent Information:</strong> When applying as a candidate, we collect your resume, work history, skills, certifications, and other relevant professional information.</li>
              <li><strong>Client Information:</strong> When you post a project or engage talent, we collect details such as company name, job description, and project requirements.</li>
              <li><strong>Billing Information:</strong> We collect and process billing details (such as name, billing address, and payment information) via Stripe, our payment processor.</li>
              <li><strong>Communications:</strong> If you contact us via email or chat, we may store your messages and contact details.</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">1.2 Automatically Collected Information</h3>
            <p className="mb-4">When you access our website or app, we automatically collect:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Device and browser information</li>
              <li>IP address and approximate location</li>
              <li>Usage data, such as pages viewed, time spent, and referring URLs</li>
              <li>Cookies and similar tracking technologies (see Section 6)</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Information</h2>
            <p className="mb-4">We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Provide, maintain, and improve our Services</li>
              <li>Facilitate communication between Clients and Talent</li>
              <li>Process payments and invoices</li>
              <li>Send transactional emails and updates (via SendGrid)</li>
              <li>Verify identity and prevent fraud</li>
              <li>Comply with legal obligations</li>
              <li>Analyze usage trends and improve user experience</li>
            </ul>
            <p className="mb-6"><strong>We do not sell or rent personal data.</strong></p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. How We Share Information</h2>
            <p className="mb-4">We may share your information as follows:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>With Service Providers:</strong> We use trusted third parties to operate our Services, such as:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Stripe (payment processing)</li>
                  <li>SendGrid (email delivery)</li>
                  <li>Supabase (database and authentication)</li>
                </ul>
              </li>
              <li><strong>With Other Users:</strong> When you apply for or post a project, limited profile information may be shared between Clients and Talent.</li>
              <li><strong>For Legal Compliance:</strong> To comply with applicable laws, regulations, or legal requests.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your data may be transferred.</li>
            </ul>
            <p className="mb-6">We require all partners and vendors to maintain adequate data protection standards.</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Data Retention</h2>
            <p className="mb-6">
              We retain your data for as long as your account is active or as needed to provide Services, comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Data Security</h2>
            <p className="mb-6">
              We use reasonable administrative, technical, and physical safeguards to protect your information, including encryption of data in transit and secure storage via Supabase and AWS infrastructure. However, no method of transmission or storage is 100% secure.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Cookies and Tracking</h2>
            <p className="mb-4">We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Keep you signed in</li>
              <li>Remember preferences</li>
              <li>Analyze site usage</li>
              <li>Improve marketing performance</li>
            </ul>
            <p className="mb-6">You can modify cookie settings in your browser, but some features may not function properly.</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Your Rights</h2>
            <p className="mb-4">Depending on your location, you may have the following rights:</p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">California Residents (CCPA)</h3>
            <p className="mb-4">You have the right to request:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Disclosure of what personal data we collect, use, or share</li>
              <li>Deletion of your personal data (subject to legal exceptions)</li>
              <li>Opt-out of sale of personal data (Glide does not sell personal data)</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">EU/EEA/UK Residents (GDPR)</h3>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Access, correct, or delete your personal data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
            <p className="mb-6">To exercise these rights, contact us at <a href="mailto:support@try-glide.com" className="text-blue-600 hover:text-blue-800">support@try-glide.com</a>.</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. International Data Transfers</h2>
            <p className="mb-6">
              Your information may be processed and stored in the United States or other countries where we or our service providers operate. We ensure that any such transfers comply with applicable data protection laws (including standard contractual clauses under GDPR).
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Children's Privacy</h2>
            <p className="mb-6">
              Our Services are not directed to children under 16. We do not knowingly collect data from minors. If you believe we have done so, please contact us to delete such information.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">10. Updates to This Policy</h2>
            <p className="mb-6">
              We may update this Privacy Policy from time to time. Updates will be posted on this page with the revised effective date.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">11. Contact Us</h2>
            <p className="mb-4">If you have questions or concerns about this Privacy Policy, please contact us:</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">Glide Global Inc.</p>
              <p className="mb-2">Email: <a href="mailto:team@try-glide.com" className="text-blue-600 hover:text-blue-800">team@try-glide.com</a></p>
              <p>Address: 441 Lexington Avenue, New York, NY 10007</p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
