import "../style/root.css"
import { Outlet } from "react-router-dom";
import NavBar from "../components/nav_bar/NavBar"

export default function Root() {
    return (
        <div>
          <NavBar/>
        </div>
    );
  }