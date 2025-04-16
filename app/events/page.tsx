import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react";

// Event type
type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
  registrationLink: string;
  isPast: boolean;
  speakers?: {
    name: string;
    role: string;
    image: string;
  }[];
};

// Sample events data
const events: Event[] = [
  {
    id: 1,
    title: "Competitive Programming Workshop",
    description:
      "Join us for an intensive workshop on competitive programming techniques. Learn advanced algorithms and data structures to excel in coding competitions.",
    date: "May 20, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Computer Science Building, Room 301",
    image: "/placeholder.svg?height=400&width=600",
    category: "Workshop",
    registrationLink: "#",
    isPast: false,
    speakers: [
      {
        name: "Rahul Verma",
        role: "Technical Head",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Sneha Desai",
        role: "Competitive Programming Lead",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    description:
      "A comprehensive bootcamp covering modern web development technologies and frameworks. From HTML/CSS basics to React and Node.js.",
    date: "June 5, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Innovation Center, Main Hall",
    image: "/placeholder.svg?height=400&width=600",
    category: "Bootcamp",
    registrationLink: "#",
    isPast: false,
  },
  {
    id: 3,
    title: "Tech Talk: Future of AI",
    description:
      "An insightful discussion on the future of Artificial Intelligence and its impact on various industries. Featuring guest speakers from leading tech companies.",
    date: "June 15, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Virtual Event (Zoom)",
    image: "/placeholder.svg?height=400&width=600",
    category: "Tech Talk",
    registrationLink: "#",
    isPast: false,
  },
  {
    id: 4,
    title: "Hackathon: Code for Good",
    description:
      "A 24-hour hackathon focused on developing solutions for social good. Work in teams to create innovative applications that address real-world problems.",
    date: "July 10-11, 2025",
    time: "Starts at 9:00 AM",
    location: "University Main Campus",
    image: "/placeholder.svg?height=400&width=600",
    category: "Hackathon",
    registrationLink: "#",
    isPast: false,
  },
  {
    id: 5,
    title: "Introduction to Machine Learning",
    description:
      "A beginner-friendly workshop on the fundamentals of machine learning. Learn about different algorithms and their applications.",
    date: "March 15, 2025",
    time: "3:00 PM - 6:00 PM",
    location: "Computer Science Building, Room 201",
    image: "/placeholder.svg?height=400&width=600",
    category: "Workshop",
    registrationLink: "#",
    isPast: true,
  },
  {
    id: 6,
    title: "Open Source Contribution Day",
    description:
      "Learn how to contribute to open source projects. Hands-on session with mentors to guide you through your first contributions.",
    date: "February 20, 2025",
    time: "11:00 AM - 4:00 PM",
    location: "Innovation Center, Lab 2",
    image: "/placeholder.svg?height=400&width=600",
    category: "Workshop",
    registrationLink: "#",
    isPast: true,
  },
];

export default function EventsPage() {
  // Filter events
  const upcomingEvents = events.filter((event) => !event.isPast);
  const pastEvents = events.filter((event) => event.isPast);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-700">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#0f9d58]">
                Events
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join us for workshops, tech talks, hackathons, and more to
                enhance your skills and network with peers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="upcoming" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-neutral border-2 border-gray-600 ">
                <TabsTrigger
                  value="upcoming"
                  className="data-[state=active]:bg-slate-600 text-white"
                >
                  Upcoming Events
                </TabsTrigger>
                <TabsTrigger
                  value="past"
                  className="data-[state=active]:bg-slate-600 text-white"
                >
                  Past Events
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="upcoming" className="space-y-8">
              {upcomingEvents.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {upcomingEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-4 text-lg font-medium">
                    No upcoming events
                  </h3>
                  <p className="mt-2 text-gray-300">
                    Check back soon for new events.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="past" className="space-y-8">
              {pastEvents.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {pastEvents.map((event) => (
                    <EventCard key={event.id} event={event} isPast />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-4 text-lg font-medium">No past events</h3>
                  <p className="mt-2 text-gray-300">
                    Stay tuned for our upcoming events.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-slate-700 to-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#0f9d58]">
                Host an Event
              </h2>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Interested in collaborating with our GeeksForGeeks Student
                Chapter for an event?
              </p>
            </div>
            <Link href="/contact">
              <Button className="bg-[#0f9d58] hover:bg-[#0c8c4d]">
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-neutral border-2 shadow-sm">
              <div className="p-3 rounded-full bg-[#0f9d58]/10">
                <Users className="h-10 w-10 text-[#0f9d58]" />
              </div>
              <h3 className="text-xl font-bold text-white">Workshops</h3>
              <p className="text-center text-gray-300">
                Hands-on sessions on various technical topics led by experienced
                mentors.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-neutral border-2 shadow-sm">
              <div className="p-3 rounded-full bg-[#0f9d58]/10">
                <Calendar className="h-10 w-10 text-[#0f9d58]" />
              </div>
              <h3 className="text-xl font-bold text-white">Hackathons</h3>
              <p className="text-center text-gray-300">
                Competitive coding events where participants build innovative
                solutions to real-world problems.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-neutral border-2 shadow-sm">
              <div className="p-3 rounded-full bg-[#0f9d58]/10">
                <ExternalLink className="h-10 w-10 text-[#0f9d58]" />
              </div>
              <h3 className="text-xl font-bold text-white">Tech Talks</h3>
              <p className="text-center text-gray-300">
                Insightful presentations by industry experts and academic
                professionals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Event Card Component
function EventCard({
  event,
  isPast = false,
}: {
  event: Event;
  isPast?: boolean;
}) {
  return (
    <Card className="overflow-hidden flex flex-col h-full bg-neutral">
      <div className="relative h-48 w-full">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover"
        />
        <Badge
          className="absolute top-2 right-2"
          variant="secondary"
          style={{ backgroundColor: "#0f9d58", color: "white" }}
        >
          {event.category}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-white">{event.title}</CardTitle>
        <CardDescription className="text-gray-300">
          {event.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-3">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
            <span className="text-sm text-gray-400">{event.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-gray-400" />
            <span className="text-sm text-gray-400">{event.time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
            <span className="text-sm text-gray-400">{event.location}</span>
          </div>
          {event.speakers && event.speakers.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2 text-green-500">
                Speakers:
              </h4>
              <div className="flex flex-wrap gap-2">
                {event.speakers.map((speaker, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden">
                      <Image
                        src={speaker.image || "/placeholder.svg"}
                        alt={speaker.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs text-green-50">
                      {speaker.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        {!isPast ? (
          <Link href={event.registrationLink} className="w-full">
            <Button className="w-full bg-[#0f9d58] hover:bg-[#0c8c4d]">
              Register Now
            </Button>
          </Link>
        ) : (
          <Button variant="outline" className="w-full" disabled>
            Event Completed
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
