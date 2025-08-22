import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Star, 
  Users, 
  Calendar,
  Briefcase,
  Heart,
  Share,
  Flag
} from "lucide-react";

const ProjectDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Header */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                        Verified Client
                      </Badge>
                      <Badge variant="outline">Featured</Badge>
                    </div>
                    <h1 className="text-2xl font-bold mb-2">
                      Build a Modern E-commerce Website with React
                    </h1>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        Remote
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Posted 2 hours ago
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        12 proposals
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Flag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-success mb-4">
                  $2,500 - $5,000
                </div>
                <div className="text-muted-foreground mb-4">Fixed price project</div>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {["React", "Node.js", "MongoDB", "Stripe", "TypeScript", "E-commerce"].map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                  ))}
                </div>

                {/* Project Description */}
                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold mb-3">Project Description</h3>
                  <p className="text-muted-foreground mb-4">
                    We're looking for an experienced React developer to build a comprehensive e-commerce website 
                    from scratch. This project involves creating a modern, responsive online store with full 
                    payment processing capabilities.
                  </p>
                  
                  <h4 className="font-semibold mb-2">Key Requirements:</h4>
                  <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                    <li>Modern React application with TypeScript</li>
                    <li>Responsive design that works on all devices</li>
                    <li>Shopping cart and checkout functionality</li>
                    <li>Stripe payment integration</li>
                    <li>User authentication and account management</li>
                    <li>Admin dashboard for product management</li>
                    <li>Product catalog with search and filtering</li>
                    <li>Order tracking and history</li>
                  </ul>

                  <h4 className="font-semibold mb-2">Deliverables:</h4>
                  <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                    <li>Complete source code with documentation</li>
                    <li>Deployed application ready for production</li>
                    <li>User guide and admin documentation</li>
                    <li>3 months of post-launch support</li>
                  </ul>

                  <h4 className="font-semibold mb-2">Timeline:</h4>
                  <p className="text-muted-foreground mb-4">
                    Expected completion within 6-8 weeks. We're flexible on start date but prefer 
                    someone who can begin within the next week.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Client Information */}
            <Card>
              <CardHeader>
                <CardTitle>About the Client</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>TC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold">TechCorp Solutions</h4>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-current text-yellow-400 mr-1" />
                      4.9 (23 reviews)
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Member since 2021 • San Francisco, CA
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  We're a growing tech startup focused on sustainable e-commerce solutions. 
                  We've successfully completed 15+ projects on the platform and value 
                  long-term partnerships with talented developers.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium">Total Spent</div>
                    <div className="text-muted-foreground">$45,000+</div>
                  </div>
                  <div>
                    <div className="font-medium">Projects Posted</div>
                    <div className="text-muted-foreground">18</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Similar Projects */}
            <Card>
              <CardHeader>
                <CardTitle>Similar Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="border-l-4 border-primary/20 pl-4">
                      <h4 className="font-medium">React Dashboard Development</h4>
                      <p className="text-sm text-muted-foreground">$1,800 • 5 proposals</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Submit Proposal */}
            <Card>
              <CardHeader>
                <CardTitle>Submit a Proposal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Bid Amount</label>
                  <Input placeholder="$0" />
                  <p className="text-xs text-muted-foreground mt-1">
                    You'll receive $X after service fees
                  </p>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Delivery Time</label>
                  <Input placeholder="e.g., 30 days" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Cover Letter</label>
                  <Textarea 
                    placeholder="Describe your approach and why you're the best fit for this project..."
                    className="min-h-32"
                  />
                </div>

                <Button className="w-full" size="lg">
                  Submit Proposal
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  You'll be able to edit your proposal until the client responds
                </p>
              </CardContent>
            </Card>

            {/* Project Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Project Type</span>
                  <span className="font-medium">Fixed Price</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Experience Level</span>
                  <span className="font-medium">Expert</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Project Length</span>
                  <span className="font-medium">1-3 months</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Remote</span>
                  <span className="font-medium">Yes</span>
                </div>
              </CardContent>
            </Card>

            {/* Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Project Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Proposals</span>
                    <span>12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Last activity</span>
                    <span>1 hour ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Views</span>
                    <span>47</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;