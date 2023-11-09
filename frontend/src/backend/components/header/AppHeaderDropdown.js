import { cilLockLocked, cilSettings, cilUser } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";

import avatar8 from "assets/images/avatars/8.jpg";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { logoutAsync } from "store/authSlice";

const AppHeaderDropdown = () => {
  const [logoutSuccessful, setLogoutSuccessful] = useState(false);
  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logoutAsync())
      .then((resultAction) => {
        if (logoutAsync.fulfilled.match(resultAction)) {
          toast.success("Logout successfull");
          setLogoutSuccessful(true);
        } else {
          const error = resultAction.error;
          throw error;
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">
          Settings
        </CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#" onClick={logoutHandler}>
          {logoutSuccessful && <Navigate replace={true} to="/admin/login" />}
          <CIcon icon={cilLockLocked} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
