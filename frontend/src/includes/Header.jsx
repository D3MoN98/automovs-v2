import { useState } from "react";

function Header() {
  const [navs, setNavs] = useState([
    {
      path: "#",
      title: "Home",
      current: true,
    },
    {
      path: "#ourServices",
      title: "Services",
      current: false,
    },
    {
      path: "#aboutUs",
      title: "About",
      current: false,
    },
    {
      path: "#contactUs",
      title: "Contact",
      current: false,
    },
  ]);

  function changeNav(e, i) {
    setNavs((prevState) => {
      return prevState.map((item, index) => {
        if (index === i) {
          return { ...item, current: true };
        }
        return { ...item, current: false };
      });
    });
  }

  return (
    <header>
      <section className="top-header">
        <div className="contact-info">
          <nav className="nav justify-content-center">
            <a className="nav-link" href="mailto:info@aoutomovs.com">
              <i className="fal fa-envelope"></i> info@aoutomovs.com
            </a>
            <a className="nav-link" href="tel:+916291839827">
              <i className="fal fa-phone"></i> 6291839827
            </a>
          </nav>
        </div>
      </section>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="images/rsz_logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto">
              {navs.map((item, index) => (
                <li className="nav-item" key={index}>
                  <a
                    className={`nav-link ${item.current ? "active" : ""}`}
                    href={item.path}
                    aria-current="page"
                    onClick={(e) => changeNav(e, index)}
                  >
                    {item.title}
                    {item.current ? (
                      <span className="visually-hidden">(current)</span>
                    ) : (
                      ""
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a
            name=""
            id=""
            className="btn-v1 book-online-btn"
            href="#onlineBooking"
            role="button"
          >
            Book Online
          </a>
        </div>
      </nav>

      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="tab1Id"
          role="tabpanel"
        ></div>
        <div className="tab-pane fade" id="tab2Id" role="tabpanel"></div>
        <div className="tab-pane fade" id="tab3Id" role="tabpanel"></div>
        <div className="tab-pane fade" id="tab4Id" role="tabpanel"></div>
        <div className="tab-pane fade" id="tab5Id" role="tabpanel"></div>
      </div>
    </header>
  );
}

export default Header;
