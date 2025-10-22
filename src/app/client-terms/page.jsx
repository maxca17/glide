import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Heading } from '@/components/text'

export default function ClientTermsPage() {
  return (
    <div className="overflow-hidden">
      <main className="py-32">
        <Container>
          <Heading as="h1" className="mb-8">
            Glide Global Inc. — Client Terms of Use
          </Heading>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-sm text-gray-500 mb-8">
              These Client Terms of Use ("Client Terms"), including the binding arbitration and class action waiver, govern the relationship between Glide Global Inc. ("Glide Global Inc.," "Company," "we," "our") and business clients using the Glide platform ("Client," "you").
            </p>
            <p className="text-sm text-gray-500 mb-8">
              By registering on or engaging Talent through the Glide Global Inc. platform (the "Platform"), you agree to these Client Terms. If you do not agree, do not register or use the Platform.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Role of Glide Global Inc.</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Glide Global Inc. is not a party to any Statement of Work ("SOW") between Client and Talent.</li>
              <li>Glide does not guarantee Talent performance, outcomes, or availability.</li>
              <li>Glide does not supervise or control Talent and is not responsible for Talent's work product.</li>
              <li>Glide facilitates introductions, billing, and enforcement of Platform policies.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Independent Contractor Relationship</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Talent engaged through the Platform is an independent contractor, not an employee of Glide or the Client.</li>
              <li>Client agrees not to treat or classify Talent as an employee of Glide.</li>
              <li>Client acknowledges it is solely responsible for compliance with all applicable laws (tax, employment, benefits, confidentiality).</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Client Responsibilities</h2>
            <p className="mb-4">Client agrees to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Provide accurate information about its business, needs, and ability to pay.</li>
              <li>Respect Talent's independent contractor status and not attempt to control the manner or means of performance beyond the agreed scope.</li>
              <li>Comply with all applicable laws, regulations, and obligations in connection with engagements.</li>
              <li>Maintain the confidentiality of information provided by Glide, Talent, or affiliates.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Engagements & SOWs</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Each engagement must be formalized in a written SOW between Client and Talent.</li>
              <li>The SOW governs scope, deliverables, timeline, and fees, and incorporates these Client Terms and the Talent Terms.</li>
              <li>Client is bound by the terms of each SOW it executes.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Payment & Billing</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>All invoices must be processed through the Platform.</li>
              <li>Hourly services are billed in 15-minute increments; fixed-fee services are billed as agreed in the SOW.</li>
              <li>Client authorizes Glide to charge the payment method on file for amounts owed.</li>
              <li>Client has seven (7) days to dispute an invoice, after which it will be deemed accepted.</li>
              <li>Payments must be remitted within [15/30] days once accepted.</li>
              <li>Credit card payments may include up to a 3% processing fee.</li>
              <li>Client remains liable for undisputed invoices even if there is a dispute over other invoices or performance.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Non-Circumvention & Buyout</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>For twenty-four (24) months after an introduction via the Platform, Client may not engage Talent outside of the Platform.</li>
              <li>If Client wishes to contract directly with Talent during this period, Client must pay Glide a Buyout Fee equal to 50% of Talent's annualized rate (based on the most recent SOW or Platform rate).</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Confidentiality & Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Both Client and Talent are bound by confidentiality obligations. Client shall protect Talent's confidential information as well as Glide's.</li>
              <li>All deliverables created by Talent under an SOW are the sole and exclusive property of the Client once created, and Talent assigns all rights, title, and interest in such deliverables to the Client.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Term & Termination</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>These Client Terms remain in effect while Client uses the Platform.</li>
              <li>Glide may suspend or terminate Client's access to the Platform at any time for violation of these Terms, applicable laws, or Talent complaints.</li>
              <li>Either Client or Talent may terminate an SOW in accordance with its terms.</li>
              <li>Termination does not relieve Client of payment obligations for Services performed or Talent of confidentiality obligations.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. International Clients</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Clients located outside the United States are responsible for compliance with all local laws, tax obligations, and cross-border requirements.</li>
              <li>Payments will be processed in USD, and Client is responsible for any associated fees.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">10. Governing Law & Arbitration</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>All disputes shall be resolved by binding arbitration under the Federal Arbitration Act.</li>
              <li>Client waives the right to sue in court, pursue jury trials, or participate in class or collective actions.</li>
              <li>These Terms are otherwise governed by the laws of [State].</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">11. Limitation of Liability</h2>
            <p className="mb-6">
              Glide Global Inc. is not a party to any SOW and has no liability for services provided by Talent or for payment disputes between Client and Talent. To the fullest extent permitted by law, Glide disclaims liability for any indirect, incidental, consequential, or punitive damages arising from or related to use of the Platform.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">12. Entire Agreement</h2>
            <p className="mb-6">
              These Client Terms, together with the Platform Terms, Talent Terms, and any applicable SOW, represent the entire agreement between Client and Glide Global Inc.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">13. Acceptance</h2>
            <p className="mb-6">
              By registering on the Platform or executing an SOW, Client accepts and agrees to these Terms.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
