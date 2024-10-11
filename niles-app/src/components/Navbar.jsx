import { Logo, Socials } from "../components";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openNavbar, closeNavbar } from "../features/modal/modalSlice";
import menu from "../assets/menu.svg";
import closeBtn from "../assets/close.svg";
import { navLinkItems } from "../utils";
const Navbar = () => {
  const { isOpen } = useSelector((store) => store.modal);

  const dispatch = useDispatch();
  return (
    <header
      className={`${
        isOpen
          ? "bg-primary px-11 sticky top-0 z-20"
          : "bg-primary px-11 sticky top-0 z-20 w-full"
      }`}
    >
      <div className="text-pry1">
        <div className="flex lg:justify-between lg:gap-x-16 items-center py-3.5">
          {/* Logo */}
          <NavLink to="#">
            <Logo />
          </NavLink>

          {/* Hamburger menu for mobile */}
          <button
            className="text-pry1 text-3xl lg:hidden"
            onClick={() => dispatch(openNavbar())}
          >
            <img src={menu} className={`${isOpen ? "hidden" : "block"}`} />
          </button>

          {/* Navbar Links */}
          <nav className="lg:flex hidden border-inspecting">
            <div className=" bg-myCustomColor-lighterGreen p-7 lg:bg-primary lg:static lg:p-0 lg:flex">
              <ul className="flex lg:gap-x-8">
                {navLinkItems.map((item) => {
                  const { id, url, text, icon } = item;
                  return (
                    <div
                      key={id}
                      className="rounded-lg mt-7 lg:m-0 p-3 lg:p-0 border-2 lg:border-0 flex items-center gap-3 border-myCustomColor-light w-60 border-inspecting"
                    >
                      <img src={icon} alt={text} className="w-8 lg:hidden" />
                      <li className="font-semibold text-primary lg:text-pry1">
                        <NavLink to={url}>{text}</NavLink>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </nav>

          {/* Join Waitlist button for large screens */}
          <button
            type="button"
            className="hidden bg-pry1 text-primary font-bold transitions btn-join-waitList hover:border-2 hover:bg-transparent hover:text-pry1 lg:block lg:w-36"
          >
            <NavLink to="#">Join Waitlist</NavLink>
          </button>

          {/* Mobile Menu (slide-in) */}
          <div
            className={`fixed top-0 right-0 w-80 h-screen bg-myCustomColor-lighterGreen z-50 transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out lg:hidden`}
          >
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                className="text-gray-600 text-3xl"
                onClick={() => dispatch(closeNavbar())}
              >
                <img src={closeBtn} className="" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col p-7 space-y-4 relative">
              {navLinkItems.map((item) => {
                const { id, url, text, icon } = item;
                return (
                  <div
                    key={id}
                    className="flex items-center gap-3 p-3 border-2 rounded-lg border-myCustomColor-light"
                    onClick={() => dispatch(closeNavbar())}
                  >
                    <img src={icon} alt={text} className="w-8" />
                    <NavLink to={url} className="font-semibold text-primary">
                      {text}
                    </NavLink>
                  </div>
                );
              })}
              <div className="fixed bottom-10 text-primary">
                <Socials />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
