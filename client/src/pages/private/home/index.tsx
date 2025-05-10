import { useState, useEffect } from "react";
import { message } from "antd";
import { getCurrentUser } from "../../../api-services/users-service";
// import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [user, setUser] = useState<any>(null);

  const getData = async () => {
    try {
      const response = await getCurrentUser();
      setUser(response.data);
    } catch (error: any) {
      message.error(
        "Error fetching user data:",
        error.response.data.message || error.message
      );
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <div className="mt-4">
        {user ? (
          <div>
            <h2 className="text-xl">Welcome, {user?.name}!</h2>
            <p>Email: {user?.email}</p>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
