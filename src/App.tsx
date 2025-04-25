import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Workouts from "./pages/Workouts";
import AllWorkouts from "./pages/AllWorkouts";
import TrainingPlan from "./pages/TrainingPlan";
import ExercisesList from "./pages/ExercisesList";
import ActiveWorkout from "./pages/ActiveWorkout";
import NotFound from "./pages/NotFound";
import CategoryExercises from "./pages/CategoryExercises";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/workouts/all" element={<AllWorkouts />} />
          <Route path="/training/:id" element={<TrainingPlan />} />
          <Route path="/training/:id/day/:day/exercises" element={<ExercisesList />} />
          <Route path="/training/:id/day/:day/workout/:exerciseId" element={<ActiveWorkout />} />
          <Route path="/category/:categoryId/exercises" element={<CategoryExercises />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
