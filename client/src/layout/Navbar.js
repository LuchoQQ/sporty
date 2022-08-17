import NavItem from "../components/NavItem";

const Navbar = () => {
  const arr = {
    HOME: "/",
    COLLECTION: "/collection",
    SHOP: "/shop",
  };

  return (
    <>
      {Object.entries(arr).map((item, index) => {
        return <NavItem path={item[1]} name={item[0]} key={index} />;
      })}
    </>
  );
};

export default Navbar;
