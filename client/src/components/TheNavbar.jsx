import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

const TheNavbar = () => {
  const location = useLocation();

  return (
    <Navbar fluid className="bg-gray-200 py-5 sm:!px-10">
      <Navbar.Brand>
        <img
          src="https://www.mangoitsolutions.com/wp-content/uploads/2022/01/becomeamernstackdeveloper-mobile-300x279.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Learning MERN Stack
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 space-x-3">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="sudharsan"
              img="https://ui-avatars.com/api/?name=Sudharsan&bold=true&color=2274A5"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Sudharsan</span>
            <span className="block truncate text-sm font-medium">
              asudharsan1805@gmail.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            <a
              href="https://github.com/danielace1"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </Dropdown.Item>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/" className={`${location.pathname === "/" ? "active" : ""}`}>
          Home
        </Link>
        <Link
          to="/create"
          className={`${location.pathname === "/create" ? "active" : ""}`}
        >
          Create
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TheNavbar;
