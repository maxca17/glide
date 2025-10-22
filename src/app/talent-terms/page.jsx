import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Heading } from '@/components/text'

export default function TalentTermsPage() {
  return (
    <div className="overflow-hidden">
      <main className="py-32">
        <Container>
          <Heading as="h1" className="mb-8">
            Glide Global Inc. — Talent Terms of Use
          </Heading>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-sm text-gray-500 mb-8">
              These Talent Terms of Use ("Talent Terms") govern the relationship between Glide Global Inc. ("Glide," "Company," "we," "our") and independent professionals providing services through the Glide platform ("Talent," "you").
            </p>
            <p className="text-sm text-gray-500 mb-8">
              By registering on or providing services through the Glide platform (the "Platform"), you acknowledge and agree to these Terms. If you do not agree, do not register or provide services.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Role of Glide Global Inc.</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Glide acts solely as a platform provider that connects Clients and Talent.</li>
              <li>Talent is not an employee, agent, or representative of Glide.</li>
              <li>Glide does not provide wages, benefits, insurance, or tax withholding.</li>
              <li>Glide does not guarantee engagements, Client payments, or outcomes.</li>
              <li>Glide facilitates contracting, billing, and payment processing between Clients and Talent.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Independent Contractor Relationship</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Talent retains full control over the manner, means, and method of performing services.</li>
              <li>Talent provides and maintains their own tools, equipment, and materials.</li>
              <li>Talent may freely perform services for other clients, including competitors.</li>
              <li>Nothing in these Terms creates an employment, partnership, joint venture, or agency relationship between Talent and Glide.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Talent Responsibilities</h2>
            <p className="mb-4">Talent agrees to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Accurately represent qualifications, skills, and experience.</li>
              <li>Perform all work in a professional and workmanlike manner consistent with industry standards.</li>
              <li>Comply with all applicable laws, regulations, and ethical obligations.</li>
              <li>Refrain from using the Platform for any fraudulent, unlawful, or deceptive conduct.</li>
              <li>Maintain the confidentiality of all information obtained through Clients or Glide.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Engagements & Statements of Work (SOWs)</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Client and Talent will negotiate and execute a written Statement of Work ("SOW") defining scope, deliverables, fees, and timing.</li>
              <li>Each SOW is a separate binding agreement between Client and Talent, governed by both these Talent Terms and applicable Client Terms.</li>
              <li>Glide is not a party to any SOW.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Payment & Billing</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>All invoices must be submitted through the Platform.</li>
              <li>Hourly work must be tracked accurately in 15-minute increments.</li>
              <li>Fixed-fee projects must be billed as defined in the applicable SOW.</li>
              <li>Clients have seven (7) days to dispute an invoice; otherwise, it is deemed accepted.</li>
              <li>Payments are made through the Client's payment method on file. Glide may withhold or offset disputed amounts.</li>
              <li>Talent is solely responsible for all taxes and required filings related to their compensation. Glide does not withhold or remit taxes on behalf of Talent.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Non-Circumvention & Buyout</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>For twenty-four (24) months after an introduction through the Platform, Talent may not contract or solicit work directly from that Client outside the Platform.</li>
              <li>If the Client wishes to engage Talent outside the Platform during this period, the Client must pay Glide a Buyout Fee equal to 50% of Talent's annualized rate (based on the most recent SOW or Platform rate).</li>
              <li>Glide reserves the right to enforce this provision and suspend or remove violating accounts.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Confidentiality & Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>"Confidential Information" includes any non-public business, financial, technical, or strategic information of Glide, Clients, or affiliates.</li>
              <li>Talent must maintain strict confidentiality, use such information only for performing services, and return or destroy it upon request.</li>
              <li>Confidentiality obligations survive for three (3) years, and indefinitely for trade secrets.</li>
              <li>Unless otherwise stated in an SOW, all deliverables created by Talent for a Client are the sole property of the Client, and Talent assigns all rights, title, and interest in those deliverables to the Client.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. International Talent</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Talent located outside the United States is responsible for compliance with local labor, tax, and business registration laws.</li>
              <li>Payments will be made in U.S. dollars (USD). Talent bears all bank, conversion, and transfer fees.</li>
              <li>Talent may not perform services from countries subject to U.S. trade sanctions or export restrictions.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Term & Termination</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>These Terms remain in effect while Talent uses the Platform.</li>
              <li>Glide may suspend or remove Talent from the Platform at any time for violations of these Terms, applicable law, or repeated Client complaints.</li>
              <li>Either Client or Talent may terminate an SOW in accordance with its terms.</li>
              <li>Termination does not relieve either party of obligations related to confidentiality or payment for completed work.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">10. Governing Law & Arbitration</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>All disputes arising from or relating to these Terms shall be resolved by binding arbitration under the Federal Arbitration Act.</li>
              <li>Talent waives the right to sue in court, pursue jury trials, or participate in class or collective actions.</li>
              <li>Except where preempted by federal law, these Terms are governed by the laws of Delaware, USA.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">11. Limitation of Liability</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Glide is not a party to any SOW and assumes no liability for services performed by Talent or for Client's failure to pay.</li>
              <li>To the fullest extent permitted by law, Glide shall not be liable for indirect, incidental, consequential, or punitive damages arising from or relating to use of the Platform.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">12. Entire Agreement</h2>
            <p className="mb-6">
              These Talent Terms, together with the Platform Terms of Use and any applicable SOW, constitute the entire agreement between Talent and Glide Global Inc., superseding all prior understandings or representations.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">13. Acceptance</h2>
            <p className="mb-6">
              By registering on the Platform or executing an SOW, you acknowledge, accept, and agree to be bound by these Talent Terms.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
