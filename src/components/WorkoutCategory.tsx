
import { Link } from "react-router-dom";

interface WorkoutCategoryProps {
  title: string;
  icon: React.ReactNode;
  id: string;
}

const WorkoutCategory = ({ title, icon, id }: WorkoutCategoryProps) => {
  return (
    <Link to={`/category/${id}/exercises`} className="flex flex-col items-center p-4 bg-secondary rounded-lg hover:bg-workout-darkGray transition-colors duration-200">
      <div className="text-workout-red mb-2">{icon}</div>
      <span className="text-white text-center">{title}</span>
    </Link>
  );
};

export default WorkoutCategory;
