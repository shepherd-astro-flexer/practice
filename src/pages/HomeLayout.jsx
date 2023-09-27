import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Header } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";

  return (
    <div>
      <Header />
      <Navbar />
      <div className="align-element py-20">
        {loading ? (
          <div className="flex justify-center h-screen">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};
export default HomeLayout;
