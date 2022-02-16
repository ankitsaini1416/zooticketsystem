import React from "react";
import { NavLink } from "react-router-dom";

const AllNav = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
              <div className="container-fluid">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu-active"
                        className="disabled"
                        exact
                        // className="nav-link"
                        to="/admin/UsersList"
                      >
                        usersList
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu-active"
                        className="disabled"
                        exact
                        // className="nav-link"
                        to="/admin/addticket"
                      >
                        addTicket
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu-active"
                        className="disabled"
                        exact
                        // className="nav-link"
                        to="/admin/adminticketlist"
                      >
                        adminTicketList
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu-active"
                        className="disabled"
                        exact
                        // className="nav-link"
                        to="/user/ticketlist"
                      >
                        UserTicketList
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu-active"
                        className="disabled"
                        exact
                        // className="nav-link"
                        to="/user/userticketdetails"
                      >
                        UserTicketDetails
                      </NavLink>
                    </li>
                    {/* <li className="nav-item">
                      <NavLink
                        activeClassName="menu-active"
                        className="disabled"
                        exact
                        // className="nav-link"
                        to="/admin/adminticketdetails"
                      >
                        AdminTicketDetails
                      </NavLink>
                    </li> */}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllNav;
