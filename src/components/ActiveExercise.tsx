import { ArrowLeft, ArrowRight, Settings, ThumbsUp, Volume2 } from "lucide-react";
import { useState } from "react";

interface ActiveExerciseProps {
  exercise: {
    id: string;
    name: string;
    image: string;
    reps?: number;
    instruction?: string;
  };
  onComplete: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

const ActiveExercise = ({ 
  exercise, 
  onComplete, 
  onPrevious, 
  onNext,
  isFirst = false,
  isLast = false
}: ActiveExerciseProps) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col items-center justify-center py-8">
        <img 
          src={exercise.image} 
          alt={exercise.name} 
          className="w-full max-w-md h-auto mb-8 rounded-lg"
        />
        
        <h2 className="text-center text-2xl font-bold text-white mb-4">
          {exercise.name}
        </h2>
        
        <div className="text-6xl font-bold text-center text-workout-red mb-6">
          {exercise.reps ? `x${exercise.reps}` : ''}
        </div>
        
        <div className="flex space-x-4 mb-8">
          <button className="rounded-full bg-workout-darkGray p-3">
            <Settings size={24} className="text-white" />
          </button>
          <button className="rounded-full bg-workout-darkGray p-3">
            <Volume2 size={24} className="text-white" />
          </button>
          <button className="rounded-full bg-workout-darkGray p-3">
            <ThumbsUp size={24} className="text-white" />
          </button>
        </div>
        
        <button 
          onClick={onComplete} 
          className="bg-workout-red text-white font-bold py-3 px-8 rounded-full text-lg w-full max-w-xs"
        >
          Done
        </button>

        <div className="flex justify-between w-full max-w-md mt-8">
          <button 
            onClick={onPrevious} 
            disabled={isFirst}
            className={`flex items-center ${isFirst ? 'text-gray-600' : 'text-white'}`}
          >
            <ArrowLeft size={16} className="mr-1" /> Previous
          </button>
          
          <button 
            onClick={onNext} 
            disabled={isLast}
            className={`flex items-center ${isLast ? 'text-gray-600' : 'text-white'}`}
          >
            Skip <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveExercise;
