import { cilApplicationsSettings, cilSpeedometer } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/admin/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    component: CNavTitle,
    name: "Theme",
  },
  //   {
  //     component: CNavItem,
  //     name: "Colors",
  //     to: "/theme/colors",
  //     icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  //   },
  {
    component: CNavGroup,
    name: "Services",
    icon: <CIcon icon={cilApplicationsSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Services",
        to: "/admin/service",
      },
      {
        component: CNavItem,
        name: "Service Types",
        to: "/service-type",
      },
    ],
  },
];

export default _nav;
