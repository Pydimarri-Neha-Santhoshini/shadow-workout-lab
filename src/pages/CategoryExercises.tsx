
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ExerciseItem from '../components/ExerciseItem';

// Mock category exercises data
const categoryExercises = {
  'strength': [
    {
      id: 'bench-press',
      name: 'Bench Press',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
      reps: 12,
      tags: ['chest', 'strength'],
      completed: false,
    },
    {
      id: 'deadlift',
      name: 'Deadlift',
      image: 'https://images.unsplash.com/photo-1598971639058-fab03d95fde2',
      reps: 10,
      tags: ['back', 'strength'],
      completed: false,
    },
    {
      id: 'squats',
      name: 'Squats',
      image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a',
      reps: 15,
      tags: ['legs', 'strength'],
      completed: false,
    },
    {
      id: 'shoulder-press',
      name: 'Shoulder Press',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5',
      reps: 10,
      tags: ['shoulders', 'strength'],
      completed: false,
    },
  ],
  'cardio': [
    {
      id: 'running',
      name: 'Running',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
      reps: 30,
      tags: ['cardio', 'endurance'],
      completed: false,
    },
    {
      id: 'jumping-jacks',
      name: 'Jumping Jacks',
      image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3',
      reps: 40,
      tags: ['cardio', 'full body'],
      completed: false,
    },
    {
      id: 'burpees',
      name: 'Burpees',
      image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e',
      reps: 15,
      tags: ['cardio', 'hiit'],
      completed: false,
    },
  ],
  'yoga': [
    {
      id: 'downward-dog',
      name: 'Downward Dog',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
      reps: 60,
      tags: ['yoga', 'flexibility'],
      completed: false,
    },
    {
      id: 'warrior-pose',
      name: 'Warrior Pose',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
      reps: 45,
      tags: ['yoga', 'balance'],
      completed: false,
    },
  ],
  'hiit': [
    {
      id: 'mountain-climbers',
      name: 'Mountain Climbers',
      image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d',
      reps: 30,
      tags: ['hiit', 'core'],
      completed: false,
    },
    {
      id: 'box-jumps',
      name: 'Box Jumps',
      image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d',
      reps: 20,
      tags: ['hiit', 'legs'],
      completed: false,
    },
    {
      id: 'kettlebell-swings',
      name: 'Kettlebell Swings',
      image: 'https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc',
      reps: 25,
      tags: ['hiit', 'full body'],
      completed: false,
    },
  ],
  'pilates': [
    {
      id: 'pilates-hundred',
      name: 'The Hundred',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a',
      reps: 1,
      tags: ['pilates', 'core'],
      completed: false,
    },
    {
      id: 'rolling-like-a-ball',
      name: 'Rolling Like a Ball',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a',
      reps: 10,
      tags: ['pilates', 'balance'],
      completed: false,
    },
  ],
  'stretching': [
    {
      id: 'hamstring-stretch',
      name: 'Hamstring Stretch',
      image: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776',
      reps: 60,
      tags: ['stretching', 'legs'],
      completed: false,
    },
    {
      id: 'shoulder-stretch',
      name: 'Shoulder Stretch',
      image: 'https://images.unsplash.com/photo-1581122584612-713f89daa8eb',
      reps: 45,
      tags: ['stretching', 'upper body'],
      completed: false,
    },
    {
      id: 'neck-stretch',
      name: 'Neck Stretch',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
      reps: 30,
      tags: ['stretching', 'neck'],
      completed: false,
    },
  ],
};

const CategoryExercises = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  
  const exercises = categoryId ? categoryExercises[categoryId] || [] : [];
  
  const startWorkout = () => {
    if (exercises.length > 0) {
      navigate(`/workout/${categoryId}/${exercises[0].id}`);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Link to="/workouts" className="text-white flex items-center mb-4">
            <ArrowLeft size={20} className="mr-2" /> Back
          </Link>
          <h1 className="text-2xl font-bold text-white text-center mb-1">
            {categoryId?.charAt(0).toUpperCase() + categoryId?.slice(1)} Workouts
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
        
        {exercises.length > 0 && (
          <div className="fixed bottom-0 left-0 w-full p-4 bg-black border-t border-workout-darkGray">
            <button 
              onClick={startWorkout}
              className="w-full bg-workout-red text-white py-4 rounded-full font-bold"
            >
              Start Workout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryExercises;
