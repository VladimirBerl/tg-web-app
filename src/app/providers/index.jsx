import NavigationFooter from "@/widgets/NavigationFooter/NavigationFooter";
import Header from "@/widgets/Header/Header";
import { Outlet } from "react-router-dom";
const LayoutPage = () => {
  return (
    <div className="app">
      <Header />
      <div className="layout background-br">
        <div className=" background-br">
          <Outlet />
        </div>
      </div>
      <NavigationFooter />
    </div>
  );
};
export default LayoutPage;
