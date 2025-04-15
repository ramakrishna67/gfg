import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Users, BookOpen, Calendar } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#13b567] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  GeeksForGeeks Student Chapter
                </h1>
                <p className="max-w-[600px] text-white/90 md:text-xl">
                  Empowering students with technical knowledge, coding skills,
                  and professional development opportunities.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/team">
                  <Button
                    variant="outline"
                    className="border-white text-black hover:bg-white/10"
                  >
                    Meet Our Team <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button
                    variant="outline"
                    className="border-white text-black hover:bg-white/10"
                  >
                    Read Our Blogs
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              src="/gfg viit logo.png"
              width={550}
              height={550}
              alt="GeeksForGeeks Student Chapter"
              className="mx-auto aspect-square rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#13b567]">
                About Our Chapter
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The GeeksForGeeks Student Chapter is a community of students
                passionate about computer science and programming. We organize
                workshops, coding competitions, and tech talks to help students
                enhance their technical skills.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-[#13b567]/10">
                <Code className="h-10 w-10 text-[#13b567]" />
              </div>
              <h3 className="text-xl font-bold">Coding Workshops</h3>
              <p className="text-center text-gray-500">
                Regular hands-on coding sessions to improve programming skills
                and problem-solving abilities.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-[#13b567]/10">
                <Users className="h-10 w-10 text-[#13b567]" />
              </div>
              <h3 className="text-xl font-bold">Community Building</h3>
              <p className="text-center text-gray-500">
                Creating a supportive network of like-minded individuals
                passionate about technology.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-[#13b567]/10">
                <BookOpen className="h-10 w-10 text-[#13b567]" />
              </div>
              <h3 className="text-xl font-bold">Learning Resources</h3>
              <p className="text-center text-gray-500">
                Access to curated learning materials, tutorials, and practice
                problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#13b567]">
                Upcoming Events
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join us for our upcoming events and activities to enhance your
                skills and network with peers.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2">
            <div className="flex flex-col space-y-3 border p-6 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-[#13b567]" />
                <span className="text-sm font-medium">May 20, 2025</span>
              </div>
              <h3 className="text-xl font-bold">
                Competitive Programming Workshop
              </h3>
              <p className="text-gray-500">
                Learn advanced algorithms and data structures for competitive
                programming contests.
              </p>
              <Link
                href="#"
                className="text-[#13b567] font-medium hover:underline"
              >
                Learn more →
              </Link>
            </div>
            <div className="flex flex-col space-y-3 border p-6 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-[#13b567]" />
                <span className="text-sm font-medium">June 5, 2025</span>
              </div>
              <h3 className="text-xl font-bold">Web Development Bootcamp</h3>
              <p className="text-gray-500">
                A comprehensive bootcamp covering modern web development
                technologies and frameworks.
              </p>
              <Link
                href="#"
                className="text-[#13b567] font-medium hover:underline"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#13b567] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Our Community
              </h2>
              <p className="max-w-[600px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Become a part of our GeeksForGeeks Student Chapter and grow your
                technical skills.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button
                  className="bg-white text-[#13b567] hover:bg-white/10"
                  variant="outline"
                >
                  Register Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white text-[#13b567] hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
