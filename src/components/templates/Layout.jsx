import { Outlet } from "react-router";
import Header from "../organisms/Header/Header";
import Footer from "../organisms/Footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;