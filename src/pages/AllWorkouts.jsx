import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TrainingPlan from './TrainingPlan';

// Mock training plans data
const trainingPlans = [
  {
    id: 'build-muscle',
    title: 'Build muscle & strength',
    day: 1,
    difficulty: 4,
  },
  {
    id: 'lose-weight',
    title: 'Lose weight & Keep fit',
    day: 1,
    difficulty: 4,
  },
  {
    id: 'lose-belly-fat',
    title: 'Lose belly fat',
    day: 1,
    difficulty: 4,
  },
  {
    id: 'toned-arms',
    title: 'Get toned arms',
    day: 1,
    difficulty: 3,
  },
  {
    id: 'strong-core',
    title: 'Build a strong core',
    day: 1,
    difficulty: 4,
  },
  {
    id: 'better-sleep',
    title: 'Exercise for better sleep',
    day: 1,
    difficulty: 2,
  },
];

const AllWorkouts = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Link to="/workouts" className="text-white flex items-center mb-4">
            <ArrowLeft size={20} className="mr-2" /> Back
          </Link>
          <h1 className="text-white text-2xl font-bold">Select Training Plan</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trainingPlans.map((plan) => (
            <TrainingPlan
              key={plan.id}
              id={plan.id}
              title={plan.title}
              day={plan.day}
              difficulty={plan.difficulty}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllWorkouts; 