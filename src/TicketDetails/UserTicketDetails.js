import React from "react";

const UserTicketDetails = () => {
  const userName = JSON.parse(localStorage.getItem("UserValues"));
  console.log("userName", JSON.stringify(userName.name));
  const table = JSON.parse(localStorage.getItem("table"));
  console.log("table", table);
  const bird = JSON.parse(localStorage.getItem("birds"));
  const mammel = JSON.parse(localStorage.getItem("mammels"));

  const waterworld = JSON.parse(localStorage.getItem("waterWorld"));

  const exoticanimals = JSON.parse(localStorage.getItem("exoticAnimals"));

  const active = JSON.parse(localStorage.getItem("activestatus"));
  const assign = JSON.parse(localStorage.getItem("assignstatus"));

  return (
    <div>
      <h1>User Ticket Details</h1>
      <table>
        <tr>
          <th>Ticket No.</th>
          <th>Ticket Type</th>
          <th>Quantity</th>
          <th>Active</th>

          <th>Assigned</th>
          <th>Valid Time</th>

          {/* <th>Name</th> */}
        </tr>
        <tr>
          <td>{table.ticketNo}</td>
          <td>{table.ticketVal}</td>
          <td>{table.inc}</td>
          <td>{active === true ? "true" : "false"}</td>

          <td>{assign === true ? "true" : "false"}</td>
          {/* <td>{userName[0].name}</td> */}
          <td>
            {bird === true ||
            mammel === true ||
            waterworld === true ||
            exoticanimals === true
              ? "Expired"
              : "Valid"}
          </td>
        </tr>
      </table>
      <br />
      <br />
    </div>
  );
};

export default UserTicketDetails;
