
function Navbar() {
    return ( 
        <>
      <nav className="navbar-expand-lg bg-body-tertiary bg-light  border border-end-0 pt-3 pb-3  ps-5 pe-5">
       <div class="container-fluid d-flex  justify-content-between ">
             <div className=" ">
            <p className="fs-5 fw-bolder m-0  ">CSI Committee Admin Dashboard</p>
            <p className="text-muted">Manage events and track student registrations</p>
            </div>

        <button className="btn bg-primary text-light fs-5 ps-2 pe-2">
            + Add Event
        </button>


  </div>

      </nav>
       
        </>
     );
}

export default Navbar;