import NavItem from "../components/NavItem";
import { selectUserData } from "../redux/reducers/userSlice";
import { useSelector } from "react-redux";
const Navbar = () => {
  const user = useSelector(selectUserData);


  let arr = {
    HOME: "/",
    COLLECTION: "/collection",
    SHOP: "/shop",
  };
  if (user.admin === true || user.admin === 1) {
    arr = {
      ...arr,
      BACKOFFICE: '/backoffice'
    }
  }
  //user === true ? arr = {...arr, BACKOFFICE: '/backoffice'} : null
  return (
    <>
      {Object.entries(arr).map((item, index) => {
        return <NavItem path={item[1]} name={item[0]} key={index} />;
      })}
    </>
  );
};

export default Navbar;
