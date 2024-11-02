"use client";

export function LoadingTorpedo() {
  return (
    <div className="relative w-full h-12 flex items-center justify-center">
      <div className="absolute h-3 w-20 bg-white clip-path-torpedo animate-torpedo-1" />
      <div className="absolute h-3 w-20 bg-white clip-path-torpedo animate-torpedo-2" />
      <div className="absolute h-3 w-20 bg-white clip-path-torpedo animate-torpedo-3" />
    </div>
  );
}