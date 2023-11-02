import { Toaster } from "react-hot-toast";

function DefaultLayout({ children }) {
  return (
    <>
      {children}
      <Toaster position="bottom-center" duration="3000" />
    </>
  );
}

export default DefaultLayout;
