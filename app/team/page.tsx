import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";

// Team member type
type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  github?: string;
  email?: string;
};

// Team members data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Harika Vavilapalli",
    role: "Lead",
    image: "/harika.jpg?height=400&width=400",
    bio: "Computer Science student passionate about algorithms and competitive programming.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "aditya@example.com",
  },
  {
    id: 2,
    name: "Geethanjali Rambarika",
    role: "Co-Lead",
    image: "/geetanjali.jpg?height=400&width=400",
    bio: "Full-stack developer with expertise in React and Node.js.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "priya@example.com",
  },
  {
    id: 3,
    name: "Ramakrishna Paila",
    role: "Technical Lead",
    image: "/Rk.jpg?height=400&width=400",
    bio: "Machine learning enthusiast with experience in Python and TensorFlow.",
    linkedin: "https://linkedin.com/in/pailaramakrishna",
    github: "https://github.com/ramakrishna67",
    email: "mailto:ramakrishnapaila64@gmail.com",
  },
  {
    id: 4,
    name: "Palisetty Sai Dinesh",
    role: "Technical Lead",
    image: "/dinesh.jpg?height=400&width=400",
    bio: "Technical writer and web developer focused on creating educational content.",
    linkedin: "https://linkedin.com",
    email: "neha@example.com",
  },
  {
    id: 5,
    name: "Geetika Sai Sravani Nahak",
    role: "CP Lead",
    image: "/geetika.jpg?height=400&width=400",
    bio: "Passionate about organizing tech events and hackathons.",
    linkedin: "https://linkedin.com",
    github: "https://github.com/GeetikaNahak",
  },
  {
    id: 6,
    name: "Beeram Narayana",
    role: "CP Lead",
    image: "/narayana.jpg?height=400&width=400",
    bio: "UI/UX designer with a keen eye for creating intuitive user experiences.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    id: 7,
    name: "Deyyala Mounica Sri Pranamya",
    role: "Event Lead",
    image: "/pranamya.jpg?height=400&width=400",
    bio: "Digital marketing specialist with experience in social media campaigns.",
    linkedin: "https://linkedin.com",
    email: "rohan@example.com",
  },
  {
    id: 8,
    name: "Buddha Sri Thrailokya Manvitha",
    role: "Event Lead",
    image: "/thrailokya.jpg?height=400&width=400",
    bio: "Focused on building partnerships with industry professionals and other student chapters.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    id: 9,
    name: "NASHRAH FATHIMA",
    role: "Content Lead",
    image: "/fatima.jpg?height=400&width=400",
    bio: "Frontend developer specializing in React and modern JavaScript frameworks.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    id: 10,
    name: "Velicheti Greeshma Sri ",
    role: "Social Media Lead",
    image: "/greeshma.jpg?height=400&width=400",
    bio: "Competitive programmer with multiple contest wins and mentoring experience.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
];

export default function team() {
  // Separate lead and co-lead from other members
  const leaders = teamMembers.filter(
    (member) => member.role === "Lead" || member.role === "Co-Lead"
  );
  const members = teamMembers.filter(
    (member) => member.role !== "Lead" && member.role !== "Co-Lead"
  );

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-700">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#0f9d58]">
                Our Team
              </h1>
              <p className="max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the dedicated individuals who make our GeeksForGeeks
                Student Chapter possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-slate-600 to-slate-900">
        <div className="container px-4 md:px-6">
          {/* Leadership Row */}
          <div className="mb-16">
            {/* <h2 className="text-2xl font-bold mb-8 text-center"></h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto ">
              {leaders.map((member) => (
                <div key={member.id} className="flex flex-col items-center">
                  <div className="bg-neutral relative w-full h-full rounded-tr-4xl rounded-bl-4xl p-6 border ">
                    <div className="text-xl font-bold text-white dark:text-white">
                      {member.name}
                    </div>
                    <div className="text-green-400 text-md max-w-sm mt-2 dark:text-neutral-300">
                      {member.role}
                    </div>
                    <div className="relative w-46 mt-4">
                      <Image
                        src={member.image || `${member.name} Image`}
                        height="400"
                        width="100"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt={member.name}
                      />
                    </div>
                    <div className="flex gap-4 justify-start text-white pt-2">
                      <Link href={member.github || "#"} target="_blank">
                        <LuGithub className="h-10 w-5" />
                      </Link>
                      <Mail className="h-10 w-5" />
                      <FaLinkedinIn className="h-10 w-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Members */}
          {/* <h2 className="text-2xl font-bold mb-8 text-center">Core Team</h2> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((member) => (
              <div key={member.id} className="flex flex-col items-center">
                <div className=" bg-neutral relative w-full h-full rounded-tr-4xl rounded-bl-4xl p-6 border ">
                  <div className="text-xl font-bold text-white dark:text-white">
                    {member.name}
                  </div>
                  <div className="text-green-300 text-md max-w-sm mt-2 dark:text-neutral-300">
                    {member.role}
                  </div>
                  <div className="relative w-46 mt-4">
                    <Image
                      src={member.image || `${member.name} Image`}
                      height="400"
                      width="100"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={member.name}
                    />
                  </div>
                  <div className="flex gap-4 justify-start text-white pt-2">
                    <Link href={member.github || "#"} target="_blank">
                      <LuGithub className="h-10 w-5" />
                    </Link>
                    <Link href={member.email || "#"} target="_blank">
                      <Mail className="h-10 w-5" />
                    </Link>
                    <Link href={member.linkedin || "#"} target="_blank">
                      <FaLinkedinIn className="h-10 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
