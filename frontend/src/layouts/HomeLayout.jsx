import Footer from "../includes/Footer";
import Header from "../includes/Header";

function HomeLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default HomeLayout;
