import { Outlet } from "react-router-dom";
import NavigationFooter from "@/widgets/NavigationFooter/NavigationFooter";
import Header from "@/widgets/Header/Header";
const LayoutPage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <NavigationFooter />
    </>
  );
};
export default LayoutPage;
