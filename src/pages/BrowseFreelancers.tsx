import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { FreelancerCard } from "../components/FreelancerCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const allFreelancers = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
  },
  {
    id: 4,
    name: "Alex Kumar",
    title: "WordPress & PHP Developer",
    rating: 4.7,
    reviewCount: 156,
    hourlyRate: "$45",
    skills: ["WordPress", "PHP", "MySQL", "jQuery", "WooCommerce"],
    location: "Mumbai, India",
    completedJobs: 123,
    description: "Experienced WordPress developer with 8+ years in custom theme and plugin development. Specialized in e-commerce and performance optimization.",
    verified: true
  },
  {
    id: 5,
    name: "Isabella Garcia",
    title: "Digital Marketing & SEO Expert",
    rating: 4.9,
    reviewCount: 78,
    hourlyRate: "$65",
    skills: ["SEO", "Google Ads", "Content Marketing", "Analytics", "Social Media"],
    location: "Barcelona, Spain",
    completedJobs: 56,
    description: "Digital marketing strategist helping businesses grow online. Specialized in SEO, PPC campaigns, and content marketing with proven ROI results.",
    verified: true
  },
  {
    id: 6,
    name: "James Wilson",
    title: "Video Editor & Motion Graphics",
    rating: 4.6,
    reviewCount: 89,
    hourlyRate: "$55",
    skills: ["After Effects", "Premiere Pro", "Cinema 4D", "Motion Graphics"],
    location: "London, UK",
    completedJobs: 78,
    description: "Creative video editor and motion graphics artist with 5+ years of experience in advertising, social media, and corporate videos.",
    verified: false
  }
];

const BrowseFreelancers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hourlyRate, setHourlyRate] = useState([0, 200]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Browse Freelancers</h1>
          <p className="text-muted-foreground">Find skilled professionals for your next project</p>
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
                      placeholder="Name, skills, title..."
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

                {/* Hourly Rate */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Hourly Rate: ${hourlyRate[0]} - ${hourlyRate[1]}
                  </label>
                  <Slider
                    value={hourlyRate}
                    onValueChange={setHourlyRate}
                    max={200}
                    min={0}
                    step={5}
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
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="europe">Europe</SelectItem>
                      <SelectItem value="asia">Asia</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Experience Level */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Experience Level</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="expert">Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Skills */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Popular Skills</label>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Python", "JavaScript", "Design", "WordPress", "SEO", "Mobile", "Data Science"].map((skill) => (
                      <Badge key={skill} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Availability</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Available Now</SelectItem>
                      <SelectItem value="week">Within a Week</SelectItem>
                      <SelectItem value="month">Within a Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort and Results */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">{allFreelancers.length} freelancers found</p>
              <Select defaultValue="rating">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="rate-low">Lowest Rate</SelectItem>
                  <SelectItem value="rate-high">Highest Rate</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Freelancers Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {allFreelancers.map((freelancer) => (
                <FreelancerCard key={freelancer.id} {...freelancer} />
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

export default BrowseFreelancers;