export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Commitment to Privacy</h2>
          <p className="mb-4">
            At VetNet AI, we take the privacy of our veterans and service members seriously. 
            This policy outlines how we collect, use, and protect your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Collection and Processing</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>All document analysis is performed locally on your device</li>
            <li>Military records are never stored on external servers</li>
            <li>Chat conversations are processed securely with industry-standard encryption</li>
            <li>Personal information is only used to personalize your transition assistance</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Security Measures</h2>
          <p className="mb-4">
            We employ military-grade security protocols to protect your data:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>End-to-end encryption for all communications</li>
            <li>Local processing of sensitive documents</li>
            <li>Regular security audits and penetration testing</li>
            <li>Compliance with DOD security standards</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Access your personal data</li>
            <li>Request data deletion</li>
            <li>Opt-out of data collection</li>
            <li>Export your data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            For privacy-related inquiries, contact our Data Protection Officer at:
            <br />
            <a href="mailto:privacy@vetnet.ai" className="text-primary hover:underline">
              privacy@vetnet.ai
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}