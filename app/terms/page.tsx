export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
          <p className="mb-4">
            By accessing VetNet AI, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Use License</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Personal, non-commercial use only</li>
            <li>No reproduction or distribution without permission</li>
            <li>No modification or derivative works</li>
            <li>No unauthorized access or use of our systems</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Service Availability</h2>
          <p className="mb-4">
            We strive to provide uninterrupted service but cannot guarantee 100% availability. 
            Maintenance and updates may occasionally affect service access.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Provide accurate information</li>
            <li>Maintain account security</li>
            <li>Comply with all applicable laws</li>
            <li>Report unauthorized access</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>
            For questions about these terms, contact us at:
            <br />
            <a href="mailto:legal@vetnet.ai" className="text-primary hover:underline">
              legal@vetnet.ai
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}