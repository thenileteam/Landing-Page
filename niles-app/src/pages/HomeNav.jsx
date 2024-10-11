import {Navbar} from "../components";
import {Outlet} from 'react-router-dom'

const HomeNav = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  );
};

export default HomeNav;
