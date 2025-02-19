import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Root = () => {
  return (
    <div>
      <div className="h-[67px]">
        <NavBar />
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
