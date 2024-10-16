import { Logo, Socials } from "../components";
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
        <div className="flex justify-between lg:gap-24 items-center py-3.5">
          {/* Logo  and remember to add the beta tag*/}
          <span className="bg-blue-500 cursor-pointer text-sm rounded-very-round fixed py-1 px-2 top-4 left-28 lg:left-36">beta</span>
          <a href="#hero" id='home'>
            <Logo />
          </a>

          {/* Hamburger menu for mobile */}
          <button
            className="text-pry1 text-3xl lg:hidden"
            onClick={() => dispatch(openNavbar())}
          >
            
            <img src={menu} className={`${isOpen ? "hidden" : "block"}`} />
          </button>
          {/* Navbar Links */}
          <nav className="lg:flex hidden grow">
            <div className=" bg-myCustomColor-lighterGreen p-7 lg:bg-primary lg:p-0 lg:flex">
              <ul className="lg:flex-container gap-x-16">
                {navLinkItems.map((item) => {
                  const { id, url, text, icon } = item;
                  return (
                    <div
                      key={id}
                      className="relative rounded-lg mt-7 lg:m-0 p-3 lg:p-0 border-2 lg:border-0 flex items-center gap-3 border-myCustomColor-light"
                    >
                      <img src={icon} alt={text} className="w-8 lg:hidden" />
                      <li className="navLink font-semibold text-primary lg:text-pry1">
                        <a href={url}>{text}</a>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </nav>

          <button
            type="button"
            className="hidden bg-pry1 text-primary font-bold transitions btn-join-waitList hover:border-2 hover:bg-transparent hover:text-pry1 lg:block lg:w-36"
          >
            <a href="https://getnile.co/" target="_blank" rel="noopener noreferrer">Join Waitlist</a>
          </button>

          {/* Mobile Menu*/}
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
                <img src={closeBtn}  loading="lazy" className="" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col px-3 gap-4">
              {navLinkItems.map((item) => {
                const { id, url, text, icon } = item;
                return (
                  <div
                    key={id}
                    className="flex items-center gap-3 p-2 border-2 rounded-lg border-myCustomColor-light"
                    onClick={() => dispatch(closeNavbar())}
                  >
                    <img src={icon} alt={text}  loading="lazy" className="w-8" />
                    <a href={url} className="font-semibold text-primary">
                      {text}
                    </a>
                  </div>
                );
              })}
              <div className="fixed bottom-1 text-primary">
                <Socials color='#004324'/>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
