"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isLoggedIn =
    typeof window !== "undefined" &&
    localStorage.getItem("isLoggedIn") === "true";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Team", href: "/team" },
    { name: "Blog", href: "/blog" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 pl-2 pr-2 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-[#0f9d58]">GFG</span>
            <span className="hidden md:inline-block font-semibold">
              Student Chapter
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#0f9d58]",
                pathname === item.href
                  ? "text-[#0f9d58] font-semibold"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex gap-4">
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          {/* <Link href="/register">
            <Button className="bg-[#0f9d58] hover:bg-[#0c8c4d]">
              Register
            </Button>
          </Link> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 flex flex-col gap-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[#0f9d58]",
                    pathname === item.href
                      ? "text-[#0f9d58] font-semibold"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex gap-4 pt-4 border-t">
              <Link href="/login" className="flex-1">
                {isLoggedIn ? null : (
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                )}
              </Link>
              {/* <Link href="/register" className="flex-1">
                <Button className="w-full bg-[#0f9d58] hover:bg-[#0c8c4d]">
                  Register
                </Button>
              </Link> */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
