import {
  Home,
  List,
  CandlestickChart,
  LogOut,
  BookCheck,
  UsersRound,
  User,
} from "lucide-react";
import type { UserType } from "../../interfaces";
import { useLocation, useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
function MenuItems({ user }: { user: UserType }) {
  const iconSize = 20;
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const userMenu = [
    {
      name: "Home",
      icon: <Home size={iconSize} />,
      path: "/",
      isActive: currentPath === "/",
    },
    {
      name: "Profile",
      path: "/profile",
      isActive: currentPath === "/profile",
      icon: <User size={iconSize} />,
    },
    {
      name: "Bookings",
      icon: <List size={iconSize} />,
      path: "/bookings",
      isActive: currentPath === "/bookings",
    },
    {
      name: "Reports",
      icon: <CandlestickChart size={iconSize} />,
      path: "/reports",
      isActive: currentPath === "/reports",
    },
    {
      name: "Logout",
      icon: <LogOut size={iconSize} />,
      path: "/logout",
    },
  ];
  const adminMenu = [
    {
      name: "Home",
      icon: <Home size={iconSize} />,
      path: "/",
      isActive: currentPath === "/",
    },
    {
      name: "Events",
      icon: <List size={iconSize} />,
      path: "/admin/events",
      isActive: currentPath.includes("/admin/events"),
    },
    {
      name: "Bookings",
      icon: <BookCheck size={iconSize} />,
      path: "/admin/bookings",
      isActive: currentPath.includes("/admin/bookings"),
    },
    {
      name: "Users",
      icon: <UsersRound size={iconSize} />,
      path: "/admin/users",
      isActive: currentPath.includes("/admin/users"),
    },
    {
      name: "Reports",
      icon: <CandlestickChart size={iconSize} />,
      path: "/admin/reports",
      isActive: currentPath.includes("/admin/reports"),
    },

    {
      name: "Logout",
      icon: <LogOut size={iconSize} />,
      path: "/logout",
    },
  ];
  const menu = user?.isAdmin ? adminMenu : userMenu;

  const handleLogout = () => {
    Cookie.remove("token");
    navigate("/login");
  };

  return (
    <div className="md:lg:bg-gray-200 h-full p-5 w-full">
      <div className="flex flex-col gap-1 mt-5">
        <h1 className="text-2xl font-bold text-info">
          Badawy
          <b className="text-black pl-2">Events</b>
        </h1>
        <span className="text-sm text-gray-600">{user?.name}</span>
      </div>
      <div className="flex flex-col gap-10 mt-20">
        {menu.map((item: any) => (
          <div
            className={`cursor-pointer px-5 py-3 rounded flex gap-5 text-sm items-center ${
              item.isActive ? "bg-info text-white" : ""
            }`}
            key={item.name}
            onClick={
              item.name === "Logout" ? handleLogout : () => navigate(item.path)
            }
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuItems;
