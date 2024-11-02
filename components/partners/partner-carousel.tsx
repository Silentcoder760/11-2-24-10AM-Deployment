"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { partners } from "@/lib/partners-data";

export function PartnerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % partners.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const partner = partners[currentIndex];

  return (
    <Link href={`/partners/${partner.slug}`}>
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-4">
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-8"
              />
              <span className="text-white font-medium">
                Featured Partner: {partner.name}
              </span>
            </div>
            <span className="text-blue-400 hover:text-blue-300 text-sm">
              Learn More →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}