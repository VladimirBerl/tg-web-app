import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import scrollTop from "@/shared/lib/scrollTop";

const Loading = lazy(() => import("@/widgets/Loading/Loading"));
const HomePage = lazy(() => import("@/pages/HomePage/HomePage.jsx"));
const PlanPage = lazy(() => import("@/pages/PlanPage/PlanPage.jsx"));
const FriendsPage = lazy(() => import("@/pages/FriendsPage/FriendsPage.jsx"));
const LayoutPage = lazy(() => import("@/app/providers"));
const TokenPage = lazy(() => import("@/pages/TokenPage/TokenPage.jsx"));
const EarnPage = lazy(() => import("@/pages/EarnPage/EarnPage.jsx"));

const Routing = () => {
  scrollTop();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <LayoutPage />
          </Suspense>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="token" element={<TokenPage />} />
        <Route path="plan" element={<PlanPage />} />
        <Route path="friends" element={<FriendsPage />} />
        <Route path="earn/*" element={<EarnPage />} />
      </Route>
    </Routes>
  );
};

export default Routing;
