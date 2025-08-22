import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Star, 
  DollarSign, 
  Briefcase,
  Calendar,
  Award,
  MessageCircle,
  Heart,
  Share,
  Clock,
  CheckCircle,
  Globe
} from "lucide-react";

const FreelancerProfile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarFallback className="text-2xl">SC</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h1 className="text-2xl font-bold">Sarah Chen</h1>
                        <p className="text-lg text-muted-foreground">Full-Stack Developer & UI/UX Designer</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Share className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 fill-current text-yellow-400" />
                        <span className="ml-1 font-semibold">4.9</span>
                        <span className="text-muted-foreground ml-1">(127 reviews)</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        San Francisco, CA
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        Usually responds in 2 hours
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                        Top Rated
                      </Badge>
                      <Badge variant="outline">Available Now</Badge>
                      <Badge variant="outline">
                        <Globe className="h-3 w-3 mr-1" />
                        English (Native)
                      </Badge>
                    </div>

                    <div className="text-2xl font-bold text-success">$85/hr</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  I'm a passionate full-stack developer with 6+ years of experience building modern web 
                  applications. I specialize in React, Node.js, and creating beautiful user experiences 
                  that drive business results.
                </p>
                <p className="text-muted-foreground mb-4">
                  My expertise spans the entire development lifecycle, from initial concept and design 
                  to deployment and maintenance. I've worked with startups and established companies, 
                  helping them build scalable solutions that grow with their business.
                </p>
                <p className="text-muted-foreground">
                  I believe in clear communication, meeting deadlines, and delivering work that exceeds 
                  expectations. Let's discuss how I can help bring your project to life!
                </p>
              </CardContent>
            </Card>

            {/* Portfolio & Work History */}
            <Tabs defaultValue="portfolio" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="reviews">Reviews (127)</TabsTrigger>
                <TabsTrigger value="history">Work History</TabsTrigger>
              </TabsList>

              <TabsContent value="portfolio" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <Card key={i} className="group hover:shadow-elevated transition-all duration-300">
                      <div className="aspect-video bg-muted rounded-t-lg"></div>
                      <CardContent className="pt-4">
                        <h3 className="font-semibold mb-2">E-commerce Platform</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Modern React-based e-commerce solution with Stripe integration
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {["React", "Node.js", "Stripe"].map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i}>
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-medium">John Doe</h4>
                              <div className="flex items-center">
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="h-4 w-4 fill-current text-yellow-400" />
                                  ))}
                                </div>
                                <span className="ml-2 text-sm text-muted-foreground">2 weeks ago</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-2">
                            "Sarah delivered exceptional work on our e-commerce project. Her attention 
                            to detail and technical expertise made the entire process smooth. Highly recommended!"
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Project: React E-commerce Website - $4,500
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="history" className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium mb-1">React Dashboard Development</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            Built a comprehensive admin dashboard with real-time analytics
                          </p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>$3,200</span>
                            <span>•</span>
                            <span>Completed in 4 weeks</span>
                            <span>•</span>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 fill-current text-yellow-400 mr-1" />
                              5.0
                            </div>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-success/10 text-success">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Completed
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Actions */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Sarah
                  </Button>
                  <Button variant="outline" className="w-full">
                    Invite to Project
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Success Rate</span>
                  <span className="font-medium">98%</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Jobs</span>
                  <span className="font-medium">89</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Earned</span>
                  <span className="font-medium">$187K+</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Repeat Clients</span>
                  <span className="font-medium">34%</span>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "React", level: 95 },
                    { name: "Node.js", level: 90 },
                    { name: "TypeScript", level: 88 },
                    { name: "UI/UX Design", level: 85 },
                    { name: "MongoDB", level: 82 }
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm">AWS Certified Developer</h4>
                      <p className="text-xs text-muted-foreground">Amazon Web Services • 2023</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm">React Certification</h4>
                      <p className="text-xs text-muted-foreground">Meta • 2022</p>
                    </div>
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

export default FreelancerProfile;