import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-slate-950 to bg-slate-800">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#13b567]">GeeksForGeeks</h3>
            <p className="text-sm text-muted-foreground">
              Student Chapter - Empowering students with technical knowledge and
              coding skills.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-[#13b567]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only ">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-[#13b567]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-[#13b567]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-[#13b567]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-[#13b567]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-muted-foreground hover:text-[#13b567]"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-[#13b567]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-muted-foreground hover:text-[#13b567]"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-[#13b567]"
                >
                  GeeksForGeeks
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-[#13b567]"
                >
                  Coding Resources
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-[#13b567]"
                >
                  Interview Preparation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-[#13b567]"
                >
                  DSA Tutorials
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  gfgstudentchapter@example.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} GeeksForGeeks Student Chapter. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
