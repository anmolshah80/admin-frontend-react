import "./sidebar.scss";
import {
  Dashboard,
  Person,
  Category,
  Inventory2,
  BarChart,
  NotificationsNoneOutlined,
  SettingsSystemDaydreamRounded,
  LocalPoliceRounded,
  Settings,
  AccountBox,
  ExitToAppRounded,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Framer</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <Person className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <Inventory2 className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <Category className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <BarChart className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <BarChart className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlined className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamRounded className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <LocalPoliceRounded className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <Settings className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountBox className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppRounded className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
