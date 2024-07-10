import { Outlet } from "react-router-dom";
import NavigationFooter from "@/widgets/NavigationFooter/NavigationFooter";
const LayoutPage = () => {
  return (
    <>
      <Outlet />
      <NavigationFooter />
    </>
  );
};
export default LayoutPage;
