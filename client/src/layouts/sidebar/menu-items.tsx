import {
  Home,
  List,
  CandlestickChart,
  LogOut,
  BookCheck,
  UsersRound,
} from "lucide-react";
import type { UserType } from "../../interfaces";
function MenuItems({ user }: { user: UserType }) {
  const iconSize = 20;
  const userMenu = [
    {
      name: "Home",
      icon: <Home size={iconSize} />,
      path: "/",
      isActive: false,
    },
    {
      name: "Bookings",
      icon: <List size={iconSize} />,
      path: "/bookings",
    },
    {
      name: "Reports",
      icon: <CandlestickChart size={iconSize} />,
      path: "/reports",
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
      isActive: false,
    },
    {
      name: "Events",
      icon: <List size={iconSize} />,
      path: "/admin/events",
      isActive: false,
    },
    {
      name: "Bookings",
      icon: <BookCheck size={iconSize} />,
      path: "/admin/bookings",
    },
    {
      name: "Users",
      icon: <UsersRound size={iconSize} />,
      path: "/admin/users",
    },
    {
      name: "Reports",
      icon: <CandlestickChart size={iconSize} />,
      path: "/admin/reports",
    },

    {
      name: "Logout",
      icon: <LogOut size={iconSize} />,
      path: "/logout",
    },
  ];
  const menu = user?.isAdmin ? adminMenu : userMenu;

  return (
    <div className="bg-gray-200 h-full p-5">
      <div className="flex flex-col gap-1 mt-5">
        <h1 className="text-2xl font-bold text-info">
          Badawy
          <b className="text-black pl-2">Events</b>
        </h1>
        <span className="text-sm text-gray-600">{user?.name}</span>
      </div>
      <div className="flex flex-col gap-10 mt-20">
        {menu.map((item: any) => (
          <div className="flex gap-5 text-sm items-center" key={item.name}>
            <span>{item.icon}</span>
            <span className="text-sm text-gray-600">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuItems;
