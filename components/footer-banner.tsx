"use client";

import Link from "next/link";
import { Shield, Twitter, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FooterBanner() {
  return (
    <footer className="border-t border-gray-800 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Shield className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by veterans for veterans. Powered by AI.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <nav className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-sm font-medium hover:text-foreground/80"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm font-medium hover:text-foreground/80"
            >
              Terms
            </Link>
            <Link
              href="/careers"
              className="text-sm font-medium hover:text-foreground/80"
            >
              Careers
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium hover:text-foreground/80"
            >
              Blog
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://instagram.com/vetnetai" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://twitter.com/vetnetai" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://facebook.com/vetnetai" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://youtube.com/@vetnetai" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/company/vetnetai" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}