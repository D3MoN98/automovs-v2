import React from "react";

import { CBreadcrumb } from "@coreui/react";

const AppBreadcrumb = () => {
  return (
    <CBreadcrumb className="m-0 ms-2">
      {/* <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <CBreadcrumbItem
            {...(breadcrumb.active ? { active: true } : { href: breadcrumb.pathname })}
            key={index}
          >
            {breadcrumb.name}
          </CBreadcrumbItem>
        )
      })} */}
    </CBreadcrumb>
  );
};

export default React.memo(AppBreadcrumb);
