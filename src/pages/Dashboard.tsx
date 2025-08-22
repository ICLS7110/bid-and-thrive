import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Briefcase, 
  DollarSign, 
  Star, 
  Users,
  TrendingUp,
  MessageCircle,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's what's happening with your projects.</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Post New Project
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,230</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Freelancers Hired</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <p className="text-xs text-muted-foreground">+4 new this month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8</div>
              <p className="text-xs text-muted-foreground">Based on 45 reviews</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList>
            <TabsTrigger value="projects">My Projects</TabsTrigger>
            <TabsTrigger value="proposals">Proposals</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: "New proposal received", project: "React E-commerce Website", time: "2 hours ago", type: "proposal" },
                    { action: "Project milestone completed", project: "Mobile App Design", time: "1 day ago", type: "milestone" },
                    { action: "Payment processed", project: "Data Analysis Project", time: "3 days ago", type: "payment" },
                    { action: "New message received", project: "WordPress Theme", time: "5 days ago", type: "message" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-lg border">
                      <div className={`p-2 rounded-full ${
                        activity.type === 'proposal' ? 'bg-blue-100 text-blue-600' :
                        activity.type === 'milestone' ? 'bg-green-100 text-green-600' :
                        activity.type === 'payment' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        {activity.type === 'proposal' && <Users className="h-4 w-4" />}
                        {activity.type === 'milestone' && <CheckCircle className="h-4 w-4" />}
                        {activity.type === 'payment' && <DollarSign className="h-4 w-4" />}
                        {activity.type === 'message' && <MessageCircle className="h-4 w-4" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.project}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Active Projects */}
            <Card>
              <CardHeader>
                <CardTitle>Active Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "React E-commerce Website",
                      freelancer: "Sarah Chen",
                      progress: 75,
                      budget: "$4,500",
                      deadline: "Dec 15, 2024",
                      status: "In Progress"
                    },
                    {
                      title: "Mobile App UI/UX Design",
                      freelancer: "Marcus Rodriguez",
                      progress: 40,
                      budget: "$2,000",
                      deadline: "Dec 30, 2024",
                      status: "Design Phase"
                    },
                    {
                      title: "WordPress Theme Customization",
                      freelancer: "Alex Kumar",
                      progress: 90,
                      budget: "$800",
                      deadline: "Dec 10, 2024",
                      status: "Review"
                    }
                  ].map((project, index) => (
                    <div key={index} className="p-4 border rounded-lg space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{project.title}</h3>
                          <p className="text-sm text-muted-foreground">by {project.freelancer}</p>
                        </div>
                        <Badge variant={project.status === 'In Progress' ? 'default' : project.status === 'Review' ? 'secondary' : 'outline'}>
                          {project.status}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>
                      
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-4">
                          <span className="font-medium">{project.budget}</span>
                          <span className="text-muted-foreground flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            Due {project.deadline}
                          </span>
                        </div>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="proposals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Proposals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold">Python Data Analysis Project</h3>
                          <p className="text-sm text-muted-foreground">3 proposals received</p>
                        </div>
                        <Badge>$1,200 - $2,000</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Posted 2 days ago</span>
                        <Button variant="outline" size="sm">Review Proposals</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center space-x-4 p-3 hover:bg-muted/50 rounded-lg cursor-pointer">
                      <Avatar>
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">Sarah Chen</p>
                            <p className="text-sm text-muted-foreground">Just submitted the latest milestone...</p>
                          </div>
                          <span className="text-xs text-muted-foreground">2h ago</span>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { project: "React E-commerce Website", amount: "$2,250", date: "Dec 1, 2024", status: "Completed" },
                    { project: "Mobile App Design", amount: "$1,000", date: "Nov 28, 2024", status: "Pending" },
                    { project: "WordPress Customization", amount: "$600", date: "Nov 25, 2024", status: "Completed" }
                  ].map((payment, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{payment.project}</p>
                        <p className="text-sm text-muted-foreground">{payment.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{payment.amount}</p>
                        <Badge variant={payment.status === 'Completed' ? 'secondary' : 'outline'}>
                          {payment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;