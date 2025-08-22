import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ProjectCard } from "../components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const allProjects = [
  {
    title: "Build a Modern E-commerce Website with React",
    description: "Looking for an experienced React developer to build a full-featured e-commerce website with payment integration, user authentication, and admin dashboard. Must have experience with Stripe integration and modern UI frameworks.",
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
  },
  {
    title: "WordPress Theme Customization",
    description: "Looking for a WordPress expert to customize an existing theme for a law firm website. Need to modify layouts, add custom fields, and ensure mobile responsiveness.",
    budget: "$500 - $1,000",
    skills: ["WordPress", "PHP", "CSS", "JavaScript"],
    location: "Remote",
    postedTime: "3 hours ago",
    proposalCount: 23,
    verified: false
  },
  {
    title: "Content Marketing Strategy & Blog Writing",
    description: "Seeking a content marketing expert to develop a comprehensive strategy and write high-quality blog posts for a SaaS company in the fintech space.",
    budget: "$1,000 - $2,500",
    skills: ["Content Marketing", "SEO", "Blog Writing", "Strategy"],
    location: "Remote",
    postedTime: "6 hours ago",
    rating: 4.7,
    proposalCount: 18,
    verified: true
  },
  {
    title: "Video Editing for YouTube Channel",
    description: "Need a skilled video editor to create engaging content for a tech YouTube channel. Must be proficient in After Effects and have experience with tech content.",
    budget: "$300 - $600",
    skills: ["Video Editing", "After Effects", "Premiere Pro", "Motion Graphics"],
    location: "Remote",
    postedTime: "1 day ago",
    proposalCount: 31,
    verified: false
  }
];

const BrowseProjects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [budgetRange, setBudgetRange] = useState([0, 10000]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Browse Projects</h1>
          <p className="text-muted-foreground">Find your next opportunity from thousands of available projects</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-80">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Keywords, skills, title..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="writing">Writing</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="data">Data & Analytics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Budget Range: ${budgetRange[0]} - ${budgetRange[1]}
                  </label>
                  <Slider
                    value={budgetRange}
                    onValueChange={setBudgetRange}
                    max={10000}
                    min={0}
                    step={100}
                    className="w-full"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="us">US Only</SelectItem>
                      <SelectItem value="europe">Europe</SelectItem>
                      <SelectItem value="asia">Asia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Project Length */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Project Length</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="short">Less than 1 month</SelectItem>
                      <SelectItem value="medium">1-3 months</SelectItem>
                      <SelectItem value="long">3-6 months</SelectItem>
                      <SelectItem value="ongoing">6+ months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Skills */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Popular Skills</label>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Python", "JavaScript", "Design", "WordPress", "SEO"].map((skill) => (
                      <Badge key={skill} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort and Results */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">{allProjects.length} projects found</p>
              <Select defaultValue="newest">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="budget-high">Highest Budget</SelectItem>
                  <SelectItem value="budget-low">Lowest Budget</SelectItem>
                  <SelectItem value="proposals">Fewest Proposals</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {allProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center">
              <div className="flex space-x-2">
                <Button variant="outline">Previous</Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BrowseProjects;