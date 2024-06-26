import { Routes, Route } from "react-router-dom";
import TokenPage from './pages/TokenPage/TokenPage'
import PlanPage from './pages/PlanPage/PlanPage'
import FriendsPage from './pages/FriendsPage/FriendsPage'
import EarnPage from './pages/EarnPage/EarnPage'
import LayoutPage from './pages/LayoutPage/LayoutPage'
import HomePage from './pages/HomePage/HomePage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<HomePage />} />
        <Route path="token" element={<TokenPage />} />
        <Route path="plan" element={<PlanPage />} />
        <Route path="friends" element={<FriendsPage />} />
        <Route path="earn/*" element={<EarnPage />} />
      </Route>
    </Routes>
  );
}
