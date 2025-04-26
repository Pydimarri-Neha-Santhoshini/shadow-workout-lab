import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-workout-red">404</h1>
        <p className="text-xl text-white mb-6">Oops! Page not found</p>
        <Link 
          to="/workouts" 
          className="bg-workout-red text-white py-2 px-6 rounded-md hover:bg-workout-redLight transition-colors"
        >
          Return to Workouts
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 