import { NavLink } from "react-router-dom";
import { FaDumbbell } from "react-icons/fa6";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";

const navLinks = [
  {
    id: 1,
    path: "/",
    text: "home",
  },
  {
    id: 2,
    path: "/about",
    text: "about",
  },
  {
    id: 3,
    path: "/products",
    text: "products",
  },
  {
    id: 4,
    path: "/cart",
    text: "cart",
  },
  {
    id: 5,
    path: "/checkout",
    text: "checkout",
  },
  {
    id: 6,
    path: "/orders",
    text: "orders",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-base-200">
      <div className="align-element navbar">
        {/* Nav Start */}
        <div className="navbar-start">
          <NavLink className="btn hidden lg:flex btn-primary " to="/">
            <FaDumbbell className="text-2xl" />
          </NavLink>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="text-2xl" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu menu-sm p-2 shadow bg-base-200 rounded-box w-52"
            >
              {navLinks.map((navLink) => {
                const { id, path, text } = navLink;
                return (
                  <li key={id}>
                    <NavLink className="capitalize" to={path}>
                      {text}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* Nav Center */}
        <div className="navbar-center">
          <ul className="hidden menu menu-horizontal capitalize lg:flex">
            {navLinks.map((navLink) => {
              const { id, path, text } = navLink;
              return (
                <li key={id}>
                  <NavLink className="" to={path}>
                    {text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Nav End */}
        <div className="navbar-end">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />
            {/* sun icon */}
            <BsSunFill className="swap-on" />
            {/* moon icon */}
            <BsMoonFill className="swap-off" />
          </label>
          <NavLink className="btn btn-circle btn-ghost ml-4 relative">
            <PiShoppingCartSimpleFill className="text-2xl" />
            <span className="badge badge-primary badge-sm absolute top-1 right-1">
              0
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
