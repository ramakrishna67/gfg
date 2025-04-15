import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, User, Tag } from "lucide-react";

// Blog post type
type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    image: string;
  };
  date: string;
  tags: string[];
  image: string;
  slug: string;
};

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Data Structures and Algorithms",
    excerpt:
      "A comprehensive guide for beginners to understand the basics of DSA and its importance in programming.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: {
      name: "Aditya Sharma",
      image: "/placeholder.svg?height=100&width=100",
    },
    date: "April 15, 2025",
    tags: ["DSA", "Programming", "Beginners"],
    image: "/placeholder.svg?height=600&width=1200",
    slug: "getting-started-with-dsa",
  },
  {
    id: 2,
    title: "Web Development Trends in 2025",
    excerpt:
      "Explore the latest trends and technologies shaping the web development landscape in 2025.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: {
      name: "Priya Patel",
      image: "/placeholder.svg?height=100&width=100",
    },
    date: "March 28, 2025",
    tags: ["Web Development", "Frontend", "Trends"],
    image: "/placeholder.svg?height=600&width=1200",
    slug: "web-development-trends-2025",
  },
  {
    id: 3,
    title: "Mastering Competitive Programming",
    excerpt:
      "Tips and strategies to excel in competitive programming contests and improve problem-solving skills.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: {
      name: "Rahul Verma",
      image: "/placeholder.svg?height=100&width=100",
    },
    date: "February 10, 2025",
    tags: ["Competitive Programming", "Algorithms", "Problem Solving"],
    image: "/placeholder.svg?height=600&width=1200",
    slug: "mastering-competitive-programming",
  },
  {
    id: 4,
    title: "Introduction to Machine Learning",
    excerpt:
      "A beginner-friendly guide to understanding the fundamentals of machine learning and its applications.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: {
      name: "Neha Singh",
      image: "/placeholder.svg?height=100&width=100",
    },
    date: "January 5, 2025",
    tags: ["Machine Learning", "AI", "Data Science"],
    image: "/placeholder.svg?height=600&width=1200",
    slug: "introduction-to-machine-learning",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f9d58]/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#0f9d58]">
                Our Blog
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Insights, tutorials, and updates from our GeeksForGeeks Student
                Chapter.
              </p>
            </div>
            <Link href="/login">
              <Button className="bg-[#0f9d58] hover:bg-[#0c8c4d]">
                Login to Write a Post
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group relative flex flex-col space-y-4 border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold leading-tight group-hover:text-[#0f9d58] transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-500">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-500">{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-500">{post.author.name}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center text-xs bg-[#0f9d58]/10 text-[#0f9d58] px-2 py-1 rounded-full"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#0f9d58] font-medium hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
