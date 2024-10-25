import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Quiz = lazy(() => import("@/pages/quiz"));
// import Quiz from "@/pages/quiz";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="quiz"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Quiz />
          </Suspense>
        }
      />
    </Routes>
  );
}
export default AppRoutes;
