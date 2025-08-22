import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Star, DollarSign, Briefcase } from "lucide-react";

import { useNavigate } from "react-router-dom";

interface FreelancerCardProps {
  id?: string | number;
  name: string;
  title: string;
  avatar?: string;
  rating: number;
  reviewCount: number;
  hourlyRate: string;
  skills: string[];
  location: string;
  completedJobs: number;
  description: string;
  verified?: boolean;
}

export const FreelancerCard = ({
  id,
  name,
  title,
  avatar,
  rating,
  reviewCount,
  hourlyRate,
  skills,
  location,
  completedJobs,
  description,
  verified = false
}: FreelancerCardProps) => {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  const navigate = useNavigate();

  const goToProfile = () => {
    if (id !== undefined) {
      navigate(`/freelancer/${id}`);
    }
  };

  return (
    <Card className="h-full hover:shadow-elevated transition-all duration-300 border border-border">
      <CardHeader className="pb-4">
        <div className="flex items-start space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="text-lg font-semibold">{initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg truncate">{name}</h3>
              {verified && (
                <Badge variant="secondary" className="bg-success/10 text-success border-success/20 ml-2">
                  Verified
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground font-medium">{title}</p>
            <div className="flex items-center mt-1">
              <Star className="h-4 w-4 fill-current text-yellow-400" />
              <span className="ml-1 font-semibold">{rating.toFixed(1)}</span>
              <span className="text-muted-foreground ml-1">({reviewCount})</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Hourly Rate */}
        <div className="flex items-center text-lg font-semibold">
          <DollarSign className="h-4 w-4 mr-1" />
          {hourlyRate}/hr
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
          {skills.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{skills.length - 3} more
            </Badge>
          )}
        </div>

        {/* Meta info */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <MapPin className="h-3 w-3 mr-1" />
            {location}
          </div>
          <div className="flex items-center">
            <Briefcase className="h-3 w-3 mr-1" />
            {completedJobs} jobs
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <Button className="w-full" variant="default" onClick={goToProfile}>
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
};