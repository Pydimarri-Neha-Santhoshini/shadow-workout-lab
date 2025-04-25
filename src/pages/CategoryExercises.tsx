
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
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
  ],
};

const CategoryExercises = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const exercises = categoryId ? categoryExercises[categoryId] || [] : [];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Link to="/workouts" className="text-white flex items-center mb-4">
            <ArrowLeft size={20} className="mr-2" /> Back
          </Link>
          <h1 className="text-white text-2xl font-bold">
            {categoryId?.charAt(0).toUpperCase() + categoryId?.slice(1)} Exercises
          </h1>
        </div>
        
        <div className="mt-8">
          {exercises.map((exercise) => (
            <ExerciseItem
              key={exercise.id}
              {...exercise}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryExercises;
