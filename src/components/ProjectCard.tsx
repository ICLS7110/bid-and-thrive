import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, DollarSign, Star } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  budget: string;
  skills: string[];
  location: string;
  postedTime: string;
  rating?: number;
  proposalCount: number;
  verified?: boolean;
}

export const ProjectCard = ({
  title,
  description,
  budget,
  skills,
  location,
  postedTime,
  rating,
  proposalCount,
  verified = false
}: ProjectCardProps) => {
  return (
    <Card className="h-full hover:shadow-elevated transition-all duration-300 border border-border">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold line-clamp-2 pr-2">
            {title}
          </CardTitle>
          {verified && (
            <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
              Verified
            </Badge>
          )}
        </div>
        <p className="text-muted-foreground text-sm line-clamp-3">
          {description}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Budget */}
        <div className="flex items-center text-lg font-semibold text-foreground">
          <DollarSign className="h-4 w-4 mr-1" />
          {budget}
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.slice(0, 4).map((skill, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
          {skills.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{skills.length - 4} more
            </Badge>
          )}
        </div>

        {/* Meta information */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <MapPin className="h-3 w-3 mr-1" />
            {location}
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {postedTime}
          </div>
        </div>

        {/* Rating and proposals */}
        <div className="flex items-center justify-between text-sm">
          {rating && (
            <div className="flex items-center text-muted-foreground">
              <Star className="h-3 w-3 mr-1 fill-current text-yellow-400" />
              {rating.toFixed(1)}
            </div>
          )}
          <span className="text-muted-foreground">
            {proposalCount} proposal{proposalCount !== 1 ? 's' : ''}
          </span>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full" variant="default">
          Submit Proposal
        </Button>
      </CardFooter>
    </Card>
  );
};