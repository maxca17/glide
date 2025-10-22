import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Heading } from '@/components/text'

export default function TermsPage() {
  return (
    <div className="overflow-hidden">
      <main className="py-32">
        <Container>
          <Heading as="h1" className="mb-8">
            Terms and Conditions
          </Heading>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              Terms and conditions content will be added here.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
