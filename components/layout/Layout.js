import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <div className="bg-pink-50">
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
