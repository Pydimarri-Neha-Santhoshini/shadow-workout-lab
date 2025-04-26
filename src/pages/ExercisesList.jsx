import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ExerciseItem from '../components/ExerciseItem';

// Mock exercises data
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

const ExercisesList = () => {
  const { id, day } = useParams();
  const navigate = useNavigate();
  
  // Default values if params are undefined
  const trainingId = id || 'build-muscle';
  const dayNumber = day ? parseInt(day) : 1;
  
  // Get exercises for this training and day
  const exercises = exercisesData[trainingId]?.[dayNumber] || [];
  
  const startWorkout = () => {
    navigate(`/training/${trainingId}/day/${dayNumber}/workout/${exercises[0].id}`);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Link to={`/training/${trainingId}`} className="text-white flex items-center mb-4">
            <ArrowLeft size={20} className="mr-2" /> Back
          </Link>
          <h1 className="text-2xl font-bold text-center mb-1">
            Strength Training - Day {dayNumber}
          </h1>
          <p className="text-workout-red text-center">
            {exercises.length} Exercises • {exercises.length * 2} min
          </p>
        </div>
        
        <div className="bg-black rounded-lg">
          {exercises.map((exercise) => (
            <ExerciseItem
              key={exercise.id}
              id={exercise.id}
              name={exercise.name}
              image={exercise.image}
              tags={exercise.tags}
              reps={exercise.reps}
              completed={exercise.completed}
            />
          ))}
        </div>
        
        <div className="fixed bottom-0 left-0 w-full p-4 bg-black border-t border-workout-darkGray">
          <button 
            onClick={startWorkout}
            className="w-full bg-workout-red text-white py-4 rounded-full font-bold"
          >
            Start Workout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExercisesList; 