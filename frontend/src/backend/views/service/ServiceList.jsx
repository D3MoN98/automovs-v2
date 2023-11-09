import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchServices } from "store/serviceSlice";

function ServiceList() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.service.services);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const columns = [
    {
      key: "id",
    },
    {
      key: "name",
    },
    {
      key: "created_at",
    },
    {
      key: "updated_at",
    },
    {
      key: "action",
    },
  ];

  return (
    <>
      <CRow>
        <CCol xs={12} className="text-end mb-4">
          <button type="button" class="btn btn-sm btn-primary">
            Add A New Service
          </button>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Service Table</strong>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                Use the table below to quickly analyze and monitor services you
                want to provide.
              </p>
              <CTable borderless columns={columns}>
                <CTableBody>
                  {services.map((service) => (
                    <CTableRow key={service.id}>
                      <CTableHeaderCell scope="row">
                        {service.id}
                      </CTableHeaderCell>
                      <CTableDataCell>{service.name}</CTableDataCell>
                      <CTableDataCell>{service.created_at}</CTableDataCell>
                      <CTableDataCell>{service.updated_at}</CTableDataCell>
                      <CTableDataCell>
                        <Link
                          to={`/admin/service/${service.id}`}
                          className="btn btn-sm btn-primary me-2"
                        >
                          Edit
                        </Link>

                        <button type="button" className="btn btn-sm btn-danger">
                          Delete
                        </button>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

export default ServiceList;
