import TheNavbar from "../components/TheNavbar";
import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return (
    <>
      <TheNavbar />
      <main className="bg-gray-100 min-h-screen px-20 py-14">
        <Outlet />
      </main>
    </>
  );
};

export default GuestLayout;
