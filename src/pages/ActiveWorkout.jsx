import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ActiveExercise from '../components/ActiveExercise';
import { toast } from 'sonner';

const exercisesData = {
  'build-muscle': {
    1: [
      {
        id: 'push-ups',
        name: 'Push-Ups',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        reps: 12,
        tags: ['body weight', 'pectorals'],
        completed: false,
      },
      {
        id: 'pull-ups',
        name: 'Pull-Ups',
        image: 'https://images.unsplash.com/photo-1598971639058-fab03d95fde2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        reps: 12,
        tags: ['body weight', 'lats'],
        completed: false,
      },
      {
        id: 'squats',
        name: 'Squats',
        image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        reps: 15,
        tags: ['body weight', 'legs'],
        completed: false,
      },
      {
        id: 'lunges',
        name: 'Lunges',
        image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        reps: 12,
        tags: ['body weight', 'legs'],
        completed: false,
      },
      {
        id: 'planks',
        name: 'Planks',
        image: 'https://images.unsplash.com/photo-1566241134883-13eb2393a3cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        reps: 30,
        tags: ['body weight', 'core'],
        completed: false,
      },
    ],
  },
};

const ActiveWorkout = () => {
  const { id, day, exerciseId } = useParams();
  const navigate = useNavigate();
  
  // Default values if params are undefined
  const trainingId = id || 'build-muscle';
  const dayNumber = day ? parseInt(day) : 1;
  
  // Get exercises for this training and day
  const exercises = exercisesData[trainingId]?.[dayNumber] || [];
  
  // Find current exercise index
  const currentExerciseIndex = exercises.findIndex(ex => ex.id === exerciseId);
  const currentExercise = exercises[currentExerciseIndex];
  
  const handleComplete = () => {
    // Mark the current exercise as completed
    if (currentExercise) {
      exercises[currentExerciseIndex].completed = true;
    }
    
    toast.success('Exercise completed!');
    
    // If this is the last exercise, go back to exercises list
    if (currentExerciseIndex === exercises.length - 1) {
      navigate(`/training/${trainingId}/day/${dayNumber}/exercises`);
    } else {
      // Otherwise, go to the next exercise
      navigate(`/training/${trainingId}/day/${dayNumber}/workout/${exercises[currentExerciseIndex + 1].id}`);
    }
  };
  
  const handlePrevious = () => {
    if (currentExerciseIndex > 0) {
      navigate(`/training/${trainingId}/day/${dayNumber}/workout/${exercises[currentExerciseIndex - 1].id}`);
    }
  };
  
  const handleNext = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      navigate(`/training/${trainingId}/day/${dayNumber}/workout/${exercises[currentExerciseIndex + 1].id}`);
    }
  };

  if (!currentExercise) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white">Exercise not found</p>
        <Link to={`/training/${trainingId}/day/${dayNumber}/exercises`} className="text-workout-red ml-2">
          Go back to exercises
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="p-4">
        <Link to={`/training/${trainingId}/day/${dayNumber}/exercises`} className="text-white">
          <ArrowLeft size={20} />
        </Link>
      </div>
      
      <ActiveExercise
        exercise={currentExercise}
        onComplete={handleComplete}
        onPrevious={handlePrevious}
        onNext={handleNext}
        isFirst={currentExerciseIndex === 0}
        isLast={currentExerciseIndex === exercises.length - 1}
      />
      
      <nav className="flex justify-between items-center p-4 border-t border-workout-darkGray">
        <div className="w-6"></div>
        <div className="flex space-x-4">
          <button className="w-8 h-8 rounded-full border border-white"></button>
          <button className="w-10 h-10 rounded-full bg-white"></button>
          <button className="w-8 h-8 rounded-full border border-white"></button>
        </div>
        <div className="w-6"></div>
      </nav>
    </div>
  );
};

export default ActiveWorkout; 