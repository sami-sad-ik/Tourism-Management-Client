import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Root = () => {
  return (
    <div>
      <div className="h-[67px]">
        <NavBar />
      </div>
      <div className="mb-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
