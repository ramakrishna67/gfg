"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PlusCircle, Edit, Trash2, FileText, User } from "lucide-react";

// Post type
type Post = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  author: string;
  status: "draft" | "published";
};

export default function dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const name = localStorage.getItem("userName") || "User";

    if (!loggedIn) {
      router.push("/login");
      return;
    }

    setIsLoggedIn(loggedIn);
    setUserName(name);

    // Load sample posts
    setPosts([
      {
        id: "1",
        title: "My First Blog Post",
        content: "This is the content of my first blog post...",
        excerpt: "An introduction to my journey in programming.",
        date: "April 10, 2025",
        author: name,
        status: "published",
      },
      {
        id: "2",
        title: "Getting Started with React",
        content:
          "React is a JavaScript library for building user interfaces...",
        excerpt: "Learn the basics of React and component-based architecture.",
        date: "April 5, 2025",
        author: name,
        status: "draft",
      },
    ]);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    router.push("/login");
  };

  const handleDeletePost = (id: string) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  if (!isLoggedIn) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 bg-[#0f9d58]/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#0f9d58]">Dashboard</h1>
              <p className="text-gray-500">Welcome back, {userName}</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-4">
              <Link href="/dashboard/new-post">
                <Button className="bg-[#0f9d58] hover:bg-[#0c8c4d]">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  New Post
                </Button>
              </Link>
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>

          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="posts">My Posts</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>
            <TabsContent value="posts" className="mt-6">
              <div className="grid gap-6">
                {posts.length > 0 ? (
                  posts.map((post) => (
                    <Card key={post.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{post.title}</CardTitle>
                            <CardDescription>{post.excerpt}</CardDescription>
                          </div>
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                            {post.status === "published"
                              ? "Published"
                              : "Draft"}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500">
                          Created on {post.date}
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-500 hover:text-red-700"
                            onClick={() => handleDeletePost(post.id)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </Button>
                        </div>
                        {post.status === "published" && (
                          <Link href={`/blog/${post.id}`}>
                            <Button variant="ghost" size="sm">
                              <FileText className="mr-2 h-4 w-4" />
                              View
                            </Button>
                          </Link>
                        )}
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <FileText className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-4 text-lg font-medium">No posts yet</h3>
                    <p className="mt-2 text-gray-500">
                      Get started by creating your first post.
                    </p>
                    <Link
                      href="/dashboard/new-post"
                      className="mt-4 inline-block"
                    >
                      <Button className="bg-[#0f9d58] hover:bg-[#0c8c4d]">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Create Post
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="profile" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your account information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-center mb-6">
                    <div className="relative w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="h-12 w-12 text-gray-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue={userName} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      defaultValue={localStorage.getItem("userEmail") || ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" placeholder="Tell us about yourself" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-[#0f9d58] hover:bg-[#0c8c4d]">
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
