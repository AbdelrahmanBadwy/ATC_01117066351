import type { UserStoreType } from "../../../store/user-store";
import useUserStore from "../../../store/user-store";
// import { useNavigate } from 'react-router-dom';

function HomePage() {
  const { currentUser } = useUserStore() as UserStoreType;
  return (
    <div className="">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <div className="mt-4">
        {currentUser ? (
          <div>
            <h2 className="text-xl">Welcome, {currentUser?.name}!</h2>
            <p>Email: {currentUser?.email}</p>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
