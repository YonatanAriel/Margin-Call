import Loading from "@/components/ui/loading";
import Home from "@/pages/home";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Good that you use it, most developer doesn't use lazy load, just make sure that you know how it works for interviews.
const Quiz = lazy(() => import("@/pages/quiz"));

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/quiz"
        element={
          <Suspense fallback={<Loading />}>
            <Quiz />
          </Suspense>
        }
      />
    </Routes>
  );
}
export default AppRoutes;
