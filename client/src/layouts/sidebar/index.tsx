import { Menu } from "lucide-react";
import type { UserType } from "../../interfaces";
import MenuItems from "./menu-items";
import { useState } from "react";
import { Drawer } from "antd";

function Sidebar({ user }: { user: UserType }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div className="">
      <div className="lg:flex hidden h-full lg:w-full">
        <MenuItems user={user} />
      </div>
      <div className="bg-info p-5 lg:hidden flex">
        <Menu
          size={30}
          className="text-white cursor-pointer"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
      </div>
      {showMobileMenu && (
        <Drawer
          title="Menu"
          placement="left"
          closable={true}
          onClose={() => setShowMobileMenu(false)}
          open={showMobileMenu}
          width={300}
        >
          <MenuItems user={user} />
        </Drawer>
      )}
    </div>
  );
}

export default Sidebar;
