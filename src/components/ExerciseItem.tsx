
import { Check } from "lucide-react";
import { useState } from "react";

interface ExerciseItemProps {
  id: string;
  name: string;
  image: string;
  reps?: number;
  tags: string[];
  completed?: boolean;
  onComplete?: (id: string) => void;
  onStart?: (id: string) => void;
}

const ExerciseItem = ({ 
  id, 
  name, 
  image, 
  tags, 
  reps, 
  completed = false,
  onComplete,
  onStart
}: ExerciseItemProps) => {
  const [isCompleted, setIsCompleted] = useState(completed);

  const handleComplete = () => {
    setIsCompleted(true);
    if (onComplete) {
      onComplete(id);
    }
  };

  const handleStart = () => {
    if (onStart) {
      onStart(id);
    }
  };

  return (
    <div className="border-b border-workout-darkGray py-4">
      <div className="flex items-center">
        <img src={image} alt={name} className="w-16 h-16 rounded-md object-cover mr-4" />
        <div className="flex-1">
          <h3 className="text-white font-medium text-lg mb-1">{name}</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="exercise-tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="text-workout-red font-bold text-xl">
          {reps && <span>x{reps}</span>}
        </div>
      </div>
    </div>
  );
};

export default ExerciseItem;
