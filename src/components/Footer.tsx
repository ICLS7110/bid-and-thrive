import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              FreelanceHub
            </div>
            <p className="text-muted-foreground mb-6">
              The world's largest freelancing marketplace connecting businesses with top talent.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><Twitter className="h-4 w-4" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:info@freelancehub.com"><Mail className="h-4 w-4" /></a>
              </Button>
            </div>
          </div>

          {/* For Freelancers */}
          <div>
            <h3 className="font-semibold mb-4">For Freelancers</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors" onClick={e => {e.preventDefault();navigate("/browse-projects")}}>Find Work</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" onClick={e => {e.preventDefault();navigate("/dashboard")}}>Success Stories</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" onClick={e => {e.preventDefault();navigate("/dashboard")}}>Resources</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" onClick={e => {e.preventDefault();navigate("/dashboard")}}>Community</a></li>
            </ul>
          </div>

          {/* For Clients */}
          <div>
            <h3 className="font-semibold mb-4">For Clients</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors" onClick={e => {e.preventDefault();navigate("/post-project")}}>Post a Project</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" onClick={e => {e.preventDefault();navigate("/browse-freelancers")}}>Find Talent</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" onClick={e => {e.preventDefault();navigate("/dashboard")}}>Enterprise</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" onClick={e => {e.preventDefault();navigate("/dashboard")}}>How it Works</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest news and updates about new features and opportunities.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button variant="default">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div>© 2024 FreelanceHub. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors" onClick={e => {e.preventDefault();navigate("/dashboard")}}>Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors" onClick={e => {e.preventDefault();navigate("/dashboard")}}>Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors" onClick={e => {e.preventDefault();navigate("/dashboard")}}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};