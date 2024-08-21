import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import scrollTop from "@/shared/lib/scrollTop";
import Loading from "../widgets/Loading/Loading";
const HomePage = lazy(() => import("@/pages/HomePage/HomePage.jsx"));
const PlanPage = lazy(() => import("@/pages/PlanPage/PlanPage.jsx"));
const FriendsPage = lazy(() => import("@/pages/FriendsPage/FriendsPage.jsx"));
const LayoutPage = lazy(() => import("@/app/providers"));
const TokenPage = lazy(() => import("@/pages/TokenPage/TokenPage.jsx"));
const EarnPage = lazy(() => import("@/pages/EarnPage/EarnPage.jsx"));
<<<<<<< HEAD
const ProfilPage = lazy(() => import("@/pages/ProfilPage/ProfilPage.jsx"));
=======
>>>>>>> 34f800874e47c176a1c5fa5e63c364629c729cdb

const Routing = () => {
  scrollTop();
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
<<<<<<< HEAD
        <Route path="profile" element={<ProfilPage />} />
=======
>>>>>>> 34f800874e47c176a1c5fa5e63c364629c729cdb
      </Route>
    </Routes>
  );
};

export default Routing;
