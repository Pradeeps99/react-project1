
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-4"
      style={{ backgroundColor: "#202020" }}>

      <a className="navbar-brand fw-bold fs-4" href="#">
        SPORT<span style={{ color: "#ffd000" }}>X</span>
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sportNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end"
        id="sportNavbar">

        <div className="navbar-nav align-items-lg-center">
          <a className="nav-link mx-2" href="#">HOME</a>
          <a className="nav-link mx-2" href="#">COMPANY</a>
          <a className="nav-link mx-2" href="#">SPORT STARS</a>
          <a className="nav-link mx-2" href="#">PRODUCTS</a>
          <a className="nav-link mx-2" href="#">CONTACT</a>
          <a className="nav-link mx-2 " href="#">BUY NOW</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
