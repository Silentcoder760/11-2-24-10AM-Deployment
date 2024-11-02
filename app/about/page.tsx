"use client";

import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
  const [imageLoadError, setImageLoadError] = useState({
    jeremy: false,
    zech: false
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Bridging the Military-Civilian Divide
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering veterans with AI-driven transition support and a community of success
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-4xl font-bold text-primary mb-2">200,000+</div>
            <div className="text-muted-foreground">Service members transition to civilian life annually</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-4xl font-bold text-primary mb-2">43%</div>
            <div className="text-muted-foreground">Leave their first post-military job within one year</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-4xl font-bold text-primary mb-2">61%</div>
            <div className="text-muted-foreground">Report challenges in translating military skills</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-4xl font-bold text-primary mb-2">48%</div>
            <div className="text-muted-foreground">Experience a period of unemployment after transition</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-4xl font-bold text-primary mb-2">67%</div>
            <div className="text-muted-foreground">Feel unprepared for the civilian job search process</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-4xl font-bold text-primary mb-2">82%</div>
            <div className="text-muted-foreground">Report needing more transition support and guidance</div>
          </div>
        </div>

        {/* Founders Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Our Founders</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Jeremy */}
            <div className="space-y-6">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-card">
                {!imageLoadError.jeremy ? (
                  <Image
                    src="/images/Jeremy Screenshot.jpg"
                    alt="Jeremy Galvez"
                    fill
                    className="object-cover"
                    onError={() => setImageLoadError(prev => ({ ...prev, jeremy: true }))}
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-card">
                    <span className="text-muted-foreground">Image unavailable</span>
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Jeremy Galvez</h3>
                <p className="text-primary font-medium mb-4">Co-Founder & CEO</p>
                <p className="text-muted-foreground">
                  As a former Infantry Officer, Jeremy witnessed firsthand how the lack of structured 
                  transition support affected his fellow service members. After experiencing his own 
                  challenging transition and seeing countless capable veterans struggle to find their 
                  footing in civilian life, he became determined to create a solution. His experience 
                  in finance and technology showed him how AI and modern tools could bridge this critical 
                  gap in veteran support.
                </p>
              </div>
            </div>

            {/* Zechariah */}
            <div className="space-y-6">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-card">
                {!imageLoadError.zech ? (
                  <Image
                    src="/images/Zech Screenshot.jpg"
                    alt="Zechariah Laidlaw"
                    fill
                    className="object-cover"
                    onError={() => setImageLoadError(prev => ({ ...prev, zech: true }))}
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-card">
                    <span className="text-muted-foreground">Image unavailable</span>
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Zechariah Laidlaw</h3>
                <p className="text-primary font-medium mb-4">Co-Founder & CTO</p>
                <p className="text-muted-foreground">
                  Following his service in the Submarine force, Zechariah recognized a critical gap between 
                  military experience and civilian opportunity. Leveraging his computer science education 
                  from UPenn and expertise in AI technology, he's dedicated to revolutionizing the 
                  transition process. His vision combines cutting-edge technology with deep empathy for 
                  the veteran experience, creating innovative solutions that make military transitions 
                  smoother and more successful.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-muted-foreground">
              To empower transitioning service members with personalized AI guidance and peer support, 
              ensuring every veteran can successfully navigate their journey to civilian life and realize 
              their full potential.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Vision</h2>
            <p className="text-muted-foreground">
              A future where every veteran's transition is supported by cutting-edge technology and a 
              thriving community, making military service a universally recognized catalyst for civilian 
              career success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}