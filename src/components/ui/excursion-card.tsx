import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, Users, MapPin } from "lucide-react";

interface ExcursionCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  rating: number;
  groupSize: string;
  image: string;
  tags: string[];
}

const ExcursionCard = ({ 
  title, 
  description, 
  price, 
  duration, 
  rating, 
  groupSize, 
  image, 
  tags 
}: ExcursionCardProps) => {
  return (
    <Card className="group hover:shadow-elevated transition-smooth cursor-pointer overflow-hidden bg-card border-0 shadow-card">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary text-primary-foreground shadow-soft">
            {tags[0]}
          </Badge>
        </div>
        <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full p-2">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-secondary fill-current" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-smooth">
          {title}
        </h3>
      </CardHeader>
      
      <CardContent className="pb-4">
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{groupSize}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 flex justify-between items-center">
        <div>
          <span className="text-2xl font-bold text-primary">{price}</span>
          <span className="text-sm text-muted-foreground">/чел</span>
        </div>
        
        <Button className="bg-gradient-ocean text-white border-0 shadow-soft hover:shadow-elevated transition-smooth">
          <MapPin className="h-4 w-4 mr-2" />
          Забронировать
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExcursionCard;