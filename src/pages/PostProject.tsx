import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { X, Plus, DollarSign, Clock, Users } from "lucide-react";

const PostProject = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  const popularSkills = ["React", "JavaScript", "Python", "Node.js", "UI/UX Design", "WordPress", "Data Analysis", "SEO"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Post a Project</h1>
          <p className="text-muted-foreground">Tell us about your project and we'll match you with the right freelancers</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Basics */}
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Project Title</Label>
                  <Input 
                    id="title" 
                    placeholder="e.g., Build a responsive website for my startup"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="development">Web Development</SelectItem>
                      <SelectItem value="design">Design & Creative</SelectItem>
                      <SelectItem value="writing">Writing & Content</SelectItem>
                      <SelectItem value="marketing">Marketing & SEO</SelectItem>
                      <SelectItem value="data">Data & Analytics</SelectItem>
                      <SelectItem value="mobile">Mobile Development</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description">Project Description</Label>
                  <Textarea 
                    id="description"
                    placeholder="Describe your project in detail. Include what you're looking for, any specific requirements, and what success looks like."
                    className="mt-1 min-h-32"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Tip: Projects with detailed descriptions receive 3x more quality proposals
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Skills & Expertise */}
            <Card>
              <CardHeader>
                <CardTitle>Skills & Expertise</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Required Skills</Label>
                  <div className="mt-2 space-y-3">
                    {/* Popular Skills */}
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Popular skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {popularSkills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                            onClick={() => {
                              if (!skills.includes(skill)) {
                                setSkills([...skills, skill]);
                              }
                            }}
                          >
                            <Plus className="h-3 w-3 mr-1" />
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Add Custom Skill */}
                    <div className="flex gap-2">
                      <Input
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Add a skill..."
                        onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                      />
                      <Button type="button" onClick={addSkill} variant="outline">
                        Add
                      </Button>
                    </div>

                    {/* Selected Skills */}
                    {skills.length > 0 && (
                      <div>
                        <p className="text-sm font-medium mb-2">Selected skills:</p>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="pr-1">
                              {skill}
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="h-auto p-0 ml-1 hover:bg-transparent"
                                onClick={() => removeSkill(skill)}
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <Label>Experience Level</Label>
                  <RadioGroup defaultValue="intermediate" className="mt-2">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="entry" id="entry" />
                        <Label htmlFor="entry" className="flex-1">
                          <div className="font-medium">Entry Level</div>
                          <div className="text-sm text-muted-foreground">Looking for someone relatively new to this field</div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="intermediate" id="intermediate" />
                        <Label htmlFor="intermediate" className="flex-1">
                          <div className="font-medium">Intermediate</div>
                          <div className="text-sm text-muted-foreground">Looking for substantial experience in this field</div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="expert" id="expert" />
                        <Label htmlFor="expert" className="flex-1">
                          <div className="font-medium">Expert</div>
                          <div className="text-sm text-muted-foreground">Looking for comprehensive and deep expertise in this field</div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>

            {/* Budget & Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Budget & Timeline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Project Type</Label>
                  <RadioGroup defaultValue="fixed" className="mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="fixed" id="fixed" />
                      <Label htmlFor="fixed">Fixed Price Project</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="hourly" id="hourly" />
                      <Label htmlFor="hourly">Hourly Project</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="budget-min">Budget Range</Label>
                    <div className="flex gap-2 mt-1">
                      <Input id="budget-min" placeholder="Min" />
                      <Input placeholder="Max" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="timeline">Project Duration</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="week">Less than 1 week</SelectItem>
                        <SelectItem value="month">1-4 weeks</SelectItem>
                        <SelectItem value="3months">1-3 months</SelectItem>
                        <SelectItem value="6months">3-6 months</SelectItem>
                        <SelectItem value="ongoing">Ongoing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Options */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="featured" />
                    <Label htmlFor="featured">Make this project featured (+$29)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="urgent" />
                    <Label htmlFor="urgent">Mark as urgent (+$19)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="nda" />
                    <Label htmlFor="nda">Require NDA from freelancers</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button className="flex-1" size="lg">
                Post Project
              </Button>
              <Button variant="outline" size="lg">
                Save Draft
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Project Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Preview will appear here</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span>Web Development</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Budget:</span>
                    <span>$2,500 - $5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Timeline:</span>
                    <span>1-3 months</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Tips for Success</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <DollarSign className="h-4 w-4 text-success mt-0.5" />
                    <div>
                      <p className="font-medium">Set a realistic budget</p>
                      <p className="text-muted-foreground">Projects with appropriate budgets get 2x more proposals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Be clear about deadlines</p>
                      <p className="text-muted-foreground">Clear timelines help freelancers plan better</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Include examples</p>
                      <p className="text-muted-foreground">Show similar work or references to clarify your vision</p>
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

export default PostProject;