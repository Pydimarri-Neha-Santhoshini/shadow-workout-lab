
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface WorkoutCardProps {
  title: string;
  image: string;
  duration: number;
  level: string;
  id: string;
}

const WorkoutCard = ({ title, image, duration, level, id }: WorkoutCardProps) => {
  return (
    <div className="workout-card">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-2">
          <span className="flex items-center">
            <span className="text-white mr-1">🔥</span> {duration} min
          </span>
          <span className="flex items-center">
            <span className="text-white mr-1">💪</span> {level}
          </span>
        </div>
        <h3 className="text-white text-lg font-bold mb-3">{title}</h3>
        <Link to={`/training/${id}`} className="workout-button">
          Start <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default WorkoutCard;
