import { BookOpen } from "lucide-react";

export function ResourceHeader() {
  return (
    <div className="flex flex-col items-center mb-8">
      <BookOpen className="h-12 w-12 text-white mb-4" />
      <h1 className="text-3xl font-bold text-center mb-2 text-white">
        Military Transition Resources
      </h1>
      <p className="text-gray-400 text-center max-w-2xl">
        Comprehensive resources to help service members successfully transition to civilian life.
      </p>
    </div>
  );
}