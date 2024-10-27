import Loading from "@/components/ui/loading";
import Home from "@/pages/home";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Quiz = lazy(() => import("@/pages/quiz"));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="quiz"
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
