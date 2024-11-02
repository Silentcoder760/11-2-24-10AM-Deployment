export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Careers at VetNet AI</h1>
      
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Join Our Mission</h2>
          <p className="mb-4">
            We're building the future of military transition support. Join our team of veterans, 
            technologists, and mission-driven professionals making a difference.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>
          <div className="space-y-6">
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2">Senior Full Stack Engineer</h3>
              <p className="text-muted-foreground mb-4">Remote • Full-time</p>
              <p className="mb-4">
                Build and scale our AI-powered transition platform using modern technologies.
              </p>
              <a href="mailto:careers@vetnet.ai" className="text-primary hover:underline">
                Apply Now →
              </a>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2">Military Transition Specialist</h3>
              <p className="text-muted-foreground mb-4">Remote • Full-time</p>
              <p className="mb-4">
                Help shape our AI models with your military transition expertise.
              </p>
              <a href="mailto:careers@vetnet.ai" className="text-primary hover:underline">
                Apply Now →
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Competitive salary and equity</li>
            <li>Remote-first culture</li>
            <li>Comprehensive health coverage</li>
            <li>Professional development budget</li>
            <li>Flexible PTO policy</li>
            <li>401(k) matching</li>
          </ul>
        </section>
      </div>
    </div>
  );
}