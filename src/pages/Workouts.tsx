
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Dumbbell, Flame, StretchHorizontal, Yoga } from 'lucide-react';
import Navbar from '../components/Navbar';
import WorkoutCard from '../components/WorkoutCard';
import WorkoutCategory from '../components/WorkoutCategory';

// Mock workout data
const recommendedWorkouts = [
  {
    id: '1',
    title: 'FULL BODY STRENGTH',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    duration: 30,
    level: 'Intermediate',
  },
  {
    id: '2',
    title: 'MORNING HIIT CARDIO',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    duration: 20,
    level: 'Beginner',
  },
  {
    id: '3',
    title: 'YOGA FOR FLEXIBILITY',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    duration: 25,
    level: 'All Levels',
  },
];

// Workout categories
const categories = [
  { id: 'strength', title: 'Strength', icon: <Dumbbell size={24} /> },
  { id: 'cardio', title: 'Cardio', icon: <Activity size={24} /> },
  { id: 'yoga', title: 'Yoga', icon: <Yoga size={24} /> },
  { id: 'hiit', title: 'HIIT', icon: <Flame size={24} /> },
  { id: 'pilates', title: 'Pilates', icon: <Activity size={24} /> },
  { id: 'stretching', title: 'Stretching', icon: <StretchHorizontal size={24} /> },
];

const Workouts = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-white text-3xl font-bold mb-8">Workouts</h1>
        
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-workout-red text-xl font-bold">RECOMMENDED FOR YOU</h2>
            <Link to="/workouts/all" className="text-white hover:text-workout-red transition-colors">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedWorkouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                id={workout.id}
                title={workout.title}
                image={workout.image}
                duration={workout.duration}
                level={workout.level}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-white text-xl font-bold mb-4">Workout Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <WorkoutCategory
                key={category.id}
                id={category.id}
                title={category.title}
                icon={category.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
