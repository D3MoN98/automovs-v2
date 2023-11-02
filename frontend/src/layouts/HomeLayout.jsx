import Footer from "includes/Footer";
import Header from "includes/Header";
import { Toaster } from "react-hot-toast";

function HomeLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Toaster position="bottom-center" duration="3000" />
    </>
  );
}

export default HomeLayout;
