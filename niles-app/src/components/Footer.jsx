import {Socials,Logo} from "../components";
const Footer = () => {
  return (
    <footer className="relative bg-primary px-4.1 py-16">
      <div className="overlay absolute z-10 left-0 right-0 -top-7 h-8 rounded-t-very-round bg-primary"></div>
      <div className="mx-auto xl:w-11/12">
        <div className="flex-container">
          <div className="text-center mb-6 pt-4">
            <a href="#" className="w-20 block mx-auto lg:w-36">
              <Logo />
            </a>
          </div>
          <article className=" flex-container gap-x-32 text-center lg:text-left">
            <ul className="mb-10">
              <h4 className="footer-headings mb-4">Products</h4>
              <li className=" mb-2 hover:underline active:opacity-60 transitions">
                <a href="#" className="text-myCustomColor-light">
                  Pricing
                </a>
              </li>
              <li className=" mb-2 hover:underline active:opacity-60 transitions">
                <a href="#" className="text-myCustomColor-light">
                  Live chat
                </a>
              </li>
              <li className="mb-2 hover:underline active:opacity-60 transitions">
                <a href="#" className="text-myCustomColor-light">
                  Support
                </a>
              </li>
            </ul>
            <ul className="mb-10">
              <h4 className="footer-headings mb-4">Useful Links</h4>
              <li className="mb-2 hover:underline active:opacity-60 transitions">
                <a href="#" className="text-myCustomColor-light">
                  Features
                </a>
              </li>
              <li className="mb-2 hover:underline active:opacity-60 transitions">
                <a href="#" className="text-myCustomColor-light">
                  Resources
                </a>
              </li>
              <li className="mb-2 hover:underline active:opacity-60 transitions">
                <a href="#" className="text-myCustomColor-light">
                  Services
                </a>
              </li>
              <li className="mb-2 hover:underline active:opacity-60 transitions">
                <a href="#" className="text-myCustomColor-light">
                  Team
                </a>
              </li>
              <li className="mb-2 hover:underline active:opacity-60 transitions">
                <a href="#" className="text-myCustomColor-light">
                  Collections
                </a>
              </li>
            </ul>
            <ul className="mb-10">
              <h4 className="footer-headings mb-4">Company</h4>
              <li className="mb-2 hover:underline active:opacity-60 transitions">
                <a href="#" className="text-myCustomColor-light">
                  About
                </a>
              </li>
              <li className="mb-2 hover:underline active:opacity-60 transition-all ease-in delay-200">
                <a href="#" className="text-myCustomColor-light">
                  Careers
                </a>
              </li>
              <li className="mb-2 hover:underline active:opacity-60  transitions">
                <a href="#" className="text-myCustomColor-light">
                  Press
                </a>
              </li>
              <li className="mb-2 hover:underline active:opacity-60 transitions">
                <a href="#" className="text-myCustomColor-light">
                  Contact
                </a>
              </li>
              <li className="mb-2 hover:underline active:opacity-60 transitions">
                <a href="#" className="text-myCustomColor-light">
                  System Status
                </a>
              </li>
            </ul>
          </article>
        </div>
        <div className="text-pry1">
        <Socials color='#F5F5F5'/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
