import { Suspense } from 'react';
import { HeroSection } from '@/components/hero-section';
import { Features } from '@/components/features';
import { LoadingTorpedo } from '@/components/loading-torpedo';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Suspense fallback={<LoadingTorpedo />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<LoadingTorpedo />}>
        <Features />
      </Suspense>
    </div>
  );
}