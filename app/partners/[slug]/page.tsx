import { notFound } from "next/navigation";
import { partners } from "@/lib/partners-data";

// Add generateStaticParams for static export
export function generateStaticParams() {
  return partners.map((partner) => ({
    slug: partner.slug,
  }));
}

export default function PartnerPage({ params }: { params: { slug: string } }) {
  const partner = partners.find((p) => p.slug === params.slug);

  if (!partner) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="h-16 mb-6"
            />
            <h1 className="text-4xl font-bold mb-4">{partner.name}</h1>
            <p className="text-gray-400 text-lg">{partner.description}</p>
          </div>

          <div className="grid gap-8">
            {partner.offerings.map((offering, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800"
              >
                <h3 className="text-xl font-semibold mb-3">{offering.title}</h3>
                <p className="text-gray-400">{offering.description}</p>
                {offering.link && (
                  <a
                    href={offering.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
                  >
                    Learn More
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <p className="text-gray-400">
                For more information about {partner.name}'s veteran programs:
              </p>
              <ul className="mt-4 space-y-2">
                {partner.contact.email && (
                  <li>
                    <strong className="text-gray-300">Email:</strong>{" "}
                    <a
                      href={`mailto:${partner.contact.email}`}
                      className="text-blue-400 hover:underline"
                    >
                      {partner.contact.email}
                    </a>
                  </li>
                )}
                {partner.contact.phone && (
                  <li>
                    <strong className="text-gray-300">Phone:</strong>{" "}
                    <a
                      href={`tel:${partner.contact.phone}`}
                      className="text-blue-400 hover:underline"
                    >
                      {partner.contact.phone}
                    </a>
                  </li>
                )}
                {partner.contact.website && (
                  <li>
                    <strong className="text-gray-300">Website:</strong>{" "}
                    <a
                      href={partner.contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Visit Website
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}