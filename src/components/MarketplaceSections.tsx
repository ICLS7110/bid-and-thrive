import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProjectCard } from "./ProjectCard";
import { FreelancerCard } from "./FreelancerCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Sample data - in a real app, this would come from an API
const sampleProjects = [
  {
    title: "Build a Modern E-commerce Website with React",
    description: "Looking for an experienced React developer to build a full-featured e-commerce website with payment integration, user authentication, and admin dashboard.",
    budget: "$2,500 - $5,000",
    skills: ["React", "Node.js", "MongoDB", "Stripe", "TypeScript"],
    location: "Remote",
    postedTime: "2 hours ago",
    rating: 4.8,
    proposalCount: 12,
    verified: true
  },
  {
    title: "Mobile App UI/UX Design for Fitness Platform",
    description: "Need a talented UI/UX designer to create modern, user-friendly designs for a fitness tracking mobile app. Should include user flow, wireframes, and high-fidelity mockups.",
    budget: "$1,200 - $2,000",
    skills: ["UI/UX Design", "Figma", "Mobile Design", "Prototyping"],
    location: "US Only",
    postedTime: "5 hours ago",
    proposalCount: 8,
    verified: false
  },
  {
    title: "Python Data Analysis and Visualization",
    description: "Seeking a data analyst to analyze customer behavior data and create comprehensive reports with visualizations. Experience with pandas, matplotlib, and statistical analysis required.",
    budget: "$800 - $1,500",
    skills: ["Python", "Pandas", "Data Analysis", "Matplotlib", "Statistics"],
    location: "Remote",
    postedTime: "1 day ago",
    rating: 4.9,
    proposalCount: 15,
    verified: true
  }
];

const sampleFreelancers = [
  {
    name: "Sarah Chen",
    title: "Full-Stack Developer & UI/UX Designer",
    rating: 4.9,
    reviewCount: 127,
    hourlyRate: "$85",
    skills: ["React", "Node.js", "UI/UX", "TypeScript", "MongoDB"],
    location: "San Francisco, CA",
    completedJobs: 89,
    description: "Passionate full-stack developer with 6+ years of experience building modern web applications. Specializing in React, Node.js, and creating beautiful user experiences.",
    verified: true
  },
  {
    name: "Marcus Rodriguez",
    title: "Mobile App Developer",
    rating: 4.8,
    reviewCount: 93,
    hourlyRate: "$75",
    skills: ["React Native", "Swift", "Kotlin", "Firebase"],
    location: "Austin, TX",
    completedJobs: 67,
    description: "Expert mobile app developer with a focus on cross-platform solutions. Built apps for startups and Fortune 500 companies with over 1M downloads.",
    verified: true
  },
  {
    name: "Emma Thompson",
    title: "Data Scientist & ML Engineer",
    rating: 5.0,
    reviewCount: 45,
    hourlyRate: "$95",
    skills: ["Python", "Machine Learning", "TensorFlow", "AWS", "SQL"],
    location: "New York, NY",
    completedJobs: 34,
    description: "PhD in Computer Science with expertise in machine learning, data analysis, and cloud deployment. Helping businesses leverage AI for growth.",
    verified: false
  }
];

export const MarketplaceSections = () => {
  const navigate = useNavigate();
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Explore Opportunities</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Discover top projects and connect with skilled freelancers from around the world
        </p>
      </div>

      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
          <TabsTrigger value="projects">Browse Projects</TabsTrigger>
          <TabsTrigger value="freelancers">Find Freelancers</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-6">
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search projects by title, skills, or keywords..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/browse-projects")}
            >
              View All Projects
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="freelancers" className="space-y-6">
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search freelancers by name, skills, or location..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Freelancers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleFreelancers.map((freelancer, index) => (
              <FreelancerCard key={index} {...freelancer} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/browse-freelancers")}
            >
              View All Freelancers
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};