import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import scrollTop from "@/shared/lib/scrollTop";
import Loading from "../widgets/Loading/Loading";
const HomePage = lazy(() => import("@/pages/HomePage/HomePage.jsx"));
const PlanPage = lazy(() => import("@/pages/PlanPage/PlanPage.jsx"));
const FriendsPage = lazy(() => import("@/pages/FriendsPage/FriendsPage.jsx"));
const LayoutPage = lazy(() => import("@/widgets/LayoutPage/LayoutPage.jsx"));
const TokenPage = lazy(() => import("@/pages/TokenPage/TokenPage.jsx"));
const EarnPage = lazy(() => import("@/pages/EarnPage/EarnPage.jsx"));
const RankPage = lazy(() => import("@/pages/RankPage/RankPage.jsx"));
const ProfilPage = lazy(() => import("@/pages/ProfilPage/ProfilPage.jsx"));

const Routing = () => {
  useEffect(() => {
    scrollTop();
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <LayoutPage />
          </Suspense>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="token" element={<TokenPage />} />
        <Route path="plan" element={<PlanPage />} />
        <Route path="friends" element={<FriendsPage />} />
        <Route path="earn/*" element={<EarnPage />} />
        <Route path="profile" element={<ProfilPage />} />
        <Route path="rank" element={<RankPage />} />
      </Route>
    </Routes>
  );
};

export default Routing;
