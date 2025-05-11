import Cookie from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import { getCurrentUser } from "../api-services/users-service";
import { message } from "antd";
import type { UserStoreType } from "../store/user-store";
import useUserStore from "../store/user-store";

function PrivateLayout({ children }: { children: React.ReactNode }) {
  const [showContent, setShowContent] = useState(false);
  const { setCurrentUser, currentUser }: UserStoreType =
    useUserStore() as UserStoreType;
  const getData = async () => {
    try {
      const response = await getCurrentUser();
      setCurrentUser(response.data);
    } catch (error: any) {
      message.error(
        "Error fetching user data:",
        error.response.data.message || error.message
      );
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookie.get("token");
    if (!token) {
      navigate("/login");
    }
    getData();
    setShowContent(true);
  }, []);
  return (
    showContent &&
    currentUser && (
      <div className="flex lg:flex-row flex-col gap-5 h-screen">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
    )
  );
}

export default PrivateLayout;
