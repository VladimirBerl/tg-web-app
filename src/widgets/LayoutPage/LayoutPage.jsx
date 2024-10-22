import NavigationFooter from "@/widgets/NavigationFooter/NavigationFooter";
import Header from "@/widgets/Header/Header";
import { Outlet } from "react-router-dom";
const LayoutPage = () => {
  return (
    <>
      <Header />
      <div className="layout">
        <Outlet />
      </div>
      <NavigationFooter />
    </>
  );
};
export default LayoutPage;
