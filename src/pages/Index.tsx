
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Index = () => {
  const navigate = useNavigate();
  
  // Automatically redirect to the workouts page
  // Simulating the first page shown in your screenshots
  setTimeout(() => {
    navigate('/workouts');
  }, 0);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6 flex items-center justify-center h-[80vh]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-workout-red mb-4">THE FITNESS HUB</h1>
          <p className="text-xl text-white mb-6">Loading your personalized workout experience...</p>
          <div className="w-16 h-16 border-4 border-workout-red border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
