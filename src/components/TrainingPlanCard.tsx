
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface TrainingPlanCardProps {
  id: string;
  title: string;
  day: number;
  difficulty: number;
}

const TrainingPlanCard = ({ id, title, day, difficulty }: TrainingPlanCardProps) => {
  const renderDifficultyIcons = () => {
    const icons = [];
    for (let i = 0; i < difficulty; i++) {
      icons.push(<span key={i}>⚡</span>);
    }
    return icons;
  };

  return (
    <div className="bg-black border border-workout-darkGray rounded-xl p-4 mb-4">
      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          {renderDifficultyIcons()}
        </div>
        <p className="text-workout-lightGray mb-1">{title}</p>
        <h3 className="text-white text-2xl font-bold mb-3">DAY {day}</h3>
        <Link 
          to={`/training/${id}/day/${day}`} 
          className="mt-2 bg-workout-red text-white py-3 px-4 rounded-lg flex items-center justify-center"
        >
          START <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default TrainingPlanCard;
