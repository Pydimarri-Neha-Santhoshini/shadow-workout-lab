import { Bell, Settings, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? "navbar-item-active" : "";
  };

  return (
    <nav className="bg-black text-white py-4 px-4 md:px-6 flex items-center justify-between border-b border-workout-darkGray">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold text-workout-red mr-8">THE FITNESS HUB</Link>
        <div className="hidden md:flex items-center space-x-1">
          <Link to="/" className={`navbar-item ${isActive('/')}`}>Dashboard</Link>
          <Link to="/workouts" className={`navbar-item ${isActive('/workouts')}`}>Workouts</Link>
          <Link to="/nutrition" className={`navbar-item ${isActive('/nutrition')}`}>Nutrition</Link>
          <Link to="/calculator" className={`navbar-item ${isActive('/calculator')}`}>BMI Calculator</Link>
          <Link to="/myth-busters" className={`navbar-item ${isActive('/myth-busters')}`}>Myth Busters</Link>
          <Link to="/ai-recommendations" className={`navbar-item ${isActive('/ai-recommendations')}`}>AI Recommendations</Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/settings" className="text-white">
          <Settings size={20} />
        </Link>
        <Link to="/notifications" className="text-white relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-workout-red text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
            2
          </span>
        </Link>
        <Link to="/profile" className="text-white">
          <User size={20} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 