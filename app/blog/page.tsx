export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">VetNet AI Blog</h1>
      
      <div className="grid gap-8">
        <article className="p-6 bg-card rounded-lg border border-border">
          <h2 className="text-2xl font-semibold mb-2">
            Leveraging AI for Military Transition Success
          </h2>
          <p className="text-muted-foreground mb-4">March 15, 2024</p>
          <p className="mb-4">
            How artificial intelligence is revolutionizing the way veterans transition to civilian life.
          </p>
          <a href="#" className="text-primary hover:underline">Read More →</a>
        </article>

        <article className="p-6 bg-card rounded-lg border border-border">
          <h2 className="text-2xl font-semibold mb-2">
            The Future of Military Skills Translation
          </h2>
          <p className="text-muted-foreground mb-4">March 10, 2024</p>
          <p className="mb-4">
            New approaches to helping employers understand and value military experience.
          </p>
          <a href="#" className="text-primary hover:underline">Read More →</a>
        </article>

        <article className="p-6 bg-card rounded-lg border border-border">
          <h2 className="text-2xl font-semibold mb-2">
            Veteran Success Stories: From Service to Tech
          </h2>
          <p className="text-muted-foreground mb-4">March 5, 2024</p>
          <p className="mb-4">
            Real stories of veterans who successfully transitioned into technology careers.
          </p>
          <a href="#" className="text-primary hover:underline">Read More →</a>
        </article>
      </div>
    </div>
  );
}