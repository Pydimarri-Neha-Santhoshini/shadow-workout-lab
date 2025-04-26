import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import WorkoutDay from '../components/WorkoutDay';

// Mock training plan data
const trainingPlansData = {
  'build-muscle': {
    title: 'Build muscle & strength',
    days: [
      { day: 1, exercises: 12, completed: false },
      { day: 2, exercises: 10, completed: false },
      { day: 3, exercises: 15, completed: false },
      { day: 4, exercises: 0, completed: false }, // Rest day
      { day: 5, exercises: 12, completed: false },
      { day: 6, exercises: 8, completed: false },
      { day: 7, exercises: 0, completed: false }, // Rest day
    ]
  },
  'lose-weight': {
    title: 'Lose weight & Keep fit',
    days: [
      { day: 1, exercises: 10, completed: false },
      { day: 2, exercises: 12, completed: false },
      { day: 3, exercises: 8, completed: false },
      { day: 4, exercises: 14, completed: false },
      { day: 5, exercises: 0, completed: false }, // Rest day
      { day: 6, exercises: 12, completed: false },
      { day: 7, exercises: 6, completed: false },
    ]
  },
  'lose-belly-fat': {
    title: 'Lose belly fat',
    days: [
      { day: 1, exercises: 12, completed: false },
      { day: 2, exercises: 10, completed: false },
      { day: 3, exercises: 15, completed: false },
      { day: 4, exercises: 0, completed: false }, // Rest day
      { day: 5, exercises: 12, completed: false },
      { day: 6, exercises: 8, completed: false },
      { day: 7, exercises: 0, completed: false }, // Rest day
    ]
  }
};

interface TrainingPlanProps {
  id?: string;
  title?: string;
  day?: number;
  difficulty?: number;
}

const TrainingPlan = ({ id, title, day, difficulty }: TrainingPlanProps = {}) => {
  const params = useParams<{ id: string }>();
  
  // Use either the prop id or the URL param
  const planId = id || (params?.id && trainingPlansData[params.id] ? params.id : 'build-muscle');
  const plan = trainingPlansData[planId];

  // If rendered as a card (with props), show the card view
  if (id && title && day && difficulty) {
    return (
      <div className="bg-black border border-workout-darkGray rounded-xl p-4 mb-4">
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            {Array.from({ length: difficulty }).map((_, i) => (
              <span key={i}>⚡</span>
            ))}
          </div>
          <p className="text-workout-lightGray mb-1">{title}</p>
          <h3 className="text-white text-2xl font-bold mb-3">DAY {day}</h3>
          <Link 
            to={`/training/${id}/day/${day}/exercises`} 
            className="mt-2 bg-workout-red text-white py-3 px-4 rounded-lg flex items-center justify-center"
          >
            START
          </Link>
        </div>
      </div>
    );
  }

  // Otherwise show the full training plan view
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Link to="/workouts" className="text-white flex items-center mb-4">
            <ArrowLeft size={20} className="mr-2" /> Back
          </Link>
          <h1 className="text-white text-2xl font-bold">{plan.title}</h1>
          <p className="text-gray-400">
            <span className="text-workout-red">Week 1</span>
          </p>
        </div>
        
        <div className="mt-8">
          {plan.days.map((day, index) => (
            <WorkoutDay
              key={day.day}
              day={day.day}
              exerciseCount={day.exercises}
              completed={day.completed}
              trainingId={planId}
              active={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingPlan;
