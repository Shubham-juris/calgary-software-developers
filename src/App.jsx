import { Outlet, createBrowserRouter } from "react-router-dom";
import FrontEndDev from "./NavPages/FrontEndDev";
import GetInTouch from "./NavPages/GetInTouch";
import DataBase from "./NavPages/DataBase";
import MobileAppDev from "./NavPages/MobileAppDev";
import BusinessCentric from "./Components/BusinessCentric";
import Contact from "./Components/Contact";
import Nabbar from "./Components/Nabbar";

function App() {
  return (
    <div>
      <Nabbar/>
      <Outlet />

    </div>
  );
}

export default App;
