import { Button } from "@/components/ui/button";
import { Search, Menu, User, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4 cursor-pointer" onClick={() => navigate("/")}>
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              FreelanceHub
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search for projects, skills, or freelancers..."
                className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          {/* Navigation Links & Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex" onClick={() => navigate("/browse-projects")}>Find Work</Button>
            <Button variant="ghost" className="hidden md:inline-flex" onClick={() => navigate("/browse-freelancers")}>Find Talent</Button>
            <Button variant="ghost" className="hidden md:inline-flex" onClick={() => navigate("/dashboard")}> <Bell className="h-4 w-4" /> </Button>
            <Button variant="outline" onClick={() => navigate("/signin")}>Sign In</Button>
            <Button variant="success" onClick={() => navigate("/signup")}>Join Now</Button>
            <Button variant="ghost" className="md:hidden" onClick={() => navigate("/dashboard")}> <Menu className="h-4 w-4" /> </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};