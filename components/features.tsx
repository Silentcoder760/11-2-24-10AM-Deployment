import {
  Shield,
  Mic,
  Headphones,
  Share2,
  BookOpen,
  Brain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const featuredStories = [
  {
    id: "1",
    veteran: "CPT Sarah Martinez",
    branch: "Army Intelligence",
    transition: "Cybersecurity Director",
    story: "From analyzing battlefield data to protecting Fortune 500 companies",
    audioUrl: "/stories/sarah-martinez.mp3",
    imageUrl: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: "2",
    veteran: "SGT Mike Chen",
    branch: "Marine Corps Infantry",
    transition: "Tech Startup Founder",
    story: "Building a veteran hiring platform after leading combat teams",
    audioUrl: "/stories/mike-chen.mp3",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop"
  },
  {
    id: "3",
    veteran: "LCDR David Wilson",
    branch: "Navy Supply Corps",
    transition: "Operations Executive",
    story: "From managing naval logistics to optimizing global supply chains",
    audioUrl: "/stories/david-wilson.mp3",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2787&auto=format&fit=crop"
  }
];

export function Features() {
  return (
    <div className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Featured Stories Section */}
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Veteran Success Stories
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Hear from those who've made the journey
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Real stories from veterans who successfully navigated their transition to civilian life.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {featuredStories.map((story) => (
            <div key={story.id} className="relative group">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src={story.imageUrl}
                  alt={story.veteran}
                  className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">{story.veteran}</h3>
                <p className="text-primary font-medium text-sm mb-2">{story.branch} → {story.transition}</p>
                <p className="text-gray-200 text-sm mb-4">{story.story}</p>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="secondary" className="gap-2">
                    <Headphones className="w-4 h-4" />
                    Listen
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Share Your Story CTA */}
        <div className="text-center mb-24">
          <Link href="/share-story">
            <Button size="lg" className="gap-2">
              <Mic className="w-5 h-5" />
              Share Your Transition Story
            </Button>
          </Link>
        </div>

        {/* Core Features */}
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">
            AI-Powered Support
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tools for your transition journey
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                <Shield className="h-5 w-5 flex-none text-primary" />
                Personalized Guidance
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">AI-powered transition assistance tailored to your service background and goals.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                <BookOpen className="h-5 w-5 flex-none text-primary" />
                Document Analysis
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">Intelligent analysis of your military records for benefits and opportunities.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                <Brain className="h-5 w-5 flex-none text-primary" />
                Skills Translation
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">Convert your military experience into civilian career qualifications.</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}