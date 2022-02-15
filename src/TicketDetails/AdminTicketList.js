import { Button } from "@material-ui/core";
import React from "react";

const AdminTicketList = () => {
  const userName = JSON.parse(localStorage.getItem("UserValues"));
  const userSignin = JSON.parse(localStorage.getItem("UserSigninValues"));

  console.log("userName", JSON.stringify(userName.name));
  const table = JSON.parse(localStorage.getItem("table"));
  console.log("table", table);
  const buyticket = JSON.parse(localStorage.getItem("buytickets"));

  let ticketId = {
    general: "yellow",
    premium: "orange",
    vip: "pink",
  };

  return (
    <div>
      <h1>Admin Ticket List</h1>
      <table>
        <tr>
          <th>Ticket No.</th>
          <th>Ticket Type</th>
          <th>Active</th>
          <th>Assigned</th>
          <th>Name</th>
        </tr>
        {JSON.parse(localStorage.getItem("table"))?.map((tableitem, i) => (
          <tr>
            <td>
              <div
                style={{
                  backgroundColor: ticketId[tableitem[0]],
                }}
              >
                {tableitem[1]}
              </div>
            </td>
            <td id="ticketname">{tableitem[0]}</td>
            <td>{tableitem[2] ? "true" : "false"}</td>
            <td>{tableitem[3] ? "true" : "false"}</td>
            <td>
              {buyticket === true
                ? userName.map((currVal) => {
                    if (currVal.email === userSignin.email) {
                      return currVal.name;
                    }
                  })
                : null}
            </td>
          </tr>
        ))}
      </table>
      <br />
      <br />
      <Button href="/admin/adminticketdetails">Admin Ticket Details</Button>
    </div>
  );
};

export default AdminTicketList;
