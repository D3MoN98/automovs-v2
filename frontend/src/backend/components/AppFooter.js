import { CFooter } from "@coreui/react";
import React from "react";

const AppFooter = () => {
  return (
    <CFooter>
      <div className="ms-auto">Copyright © 2023 All Rights Reserved.</div>
    </CFooter>
  );
};

export default React.memo(AppFooter);
