"use client";

export function LoadingTorpedo() {
  return (
    <div className="relative h-12 w-full">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className={`absolute top-1/2 left-0 h-3 w-16 bg-white clip-path-torpedo animate-torpedo-${i}`}
        >
          <div className="absolute left-[-20px] top-1/2 h-1.5 w-20 -translate-y-1/2 bg-gradient-to-l from-white to-transparent opacity-50" />
        </div>
      ))}
    </div>
  );
}