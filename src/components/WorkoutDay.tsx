
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

interface WorkoutDayProps {
  day: number;
  exerciseCount: number;
  completed?: boolean;
  trainingId: string;
  active?: boolean;
}

const WorkoutDay = ({ day, exerciseCount, completed, trainingId, active = false }: WorkoutDayProps) => {
  return (
    <div className={`relative border-l-2 ${active ? 'border-workout-red' : 'border-workout-darkGray'} pl-6 py-4`}>
      <div className={`absolute left-0 top-4 transform -translate-x-1/2 w-4 h-4 rounded-full ${active ? 'bg-workout-red' : 'bg-workout-darkGray'}`}></div>
      <div className={`${active ? 'bg-workout-red' : 'bg-workout-blackLight'} rounded-xl p-4`}>
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-white font-bold">Day {day}</h3>
          {completed && <Check size={18} className="text-green-500" />}
        </div>
        <p className="text-gray-400 mb-3">
          {exerciseCount > 0 ? `${exerciseCount} Exercises` : "Rest"}
        </p>
        {exerciseCount > 0 && (
          <Link 
            to={`/training/${trainingId}/day/${day}/exercises`} 
            className={`${active ? 'bg-white text-workout-red' : 'bg-transparent border border-white text-white'} px-4 py-2 rounded-full text-sm flex items-center justify-center w-28`}
          >
            Start <ArrowRight size={14} className="ml-1" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default WorkoutDay;
