import { ArrowLeft, ArrowRight, Settings, ThumbsUp, Volume2 } from "lucide-react";
import { useState } from "react";

const ActiveExercise = ({ 
  exercise, 
  onComplete, 
  onPrevious, 
  onNext,
  isFirst = false,
  isLast = false
}) => {
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
        </div>
        
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            {!isFirst && (
              <button 
                onClick={onPrevious}
                className="rounded-full bg-workout-darkGray p-3"
              >
                <ArrowLeft size={24} className="text-white" />
              </button>
            )}
            
            <button 
              onClick={onComplete}
              className="rounded-full bg-workout-red p-3"
            >
              <ThumbsUp size={24} className="text-white" />
            </button>
            
            {!isLast && (
              <button 
                onClick={onNext}
                className="rounded-full bg-workout-darkGray p-3"
              >
                <ArrowRight size={24} className="text-white" />
              </button>
            )}
          </div>
          
          <button 
            onClick={onComplete}
            className="bg-workout-red text-white py-3 px-8 rounded-lg font-bold text-lg"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveExercise; 