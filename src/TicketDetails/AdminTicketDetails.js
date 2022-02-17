import React from "react";
import AllNav from "../AllNav";

const AdminTicketDetails = () => {
  let ticketId = {
    general: "yellow",
    premium: "orange",
    vip: "pink",
  };

  return (
    <div>
      <AllNav />
      <h1>Unassigned Tickets</h1>
      <table>
        <tr>
          <th>Ticket No.</th>
          <th>Ticket Type</th>
          <th>Active</th>

          <th>Assigned</th>
        </tr>
        {JSON.parse(localStorage.getItem("table"))?.map((tableitem, i) => (
          <tr key={i}>
            <td>
              <div
                style={{
                  backgroundColor: ticketId[tableitem[0]],
                }}
              >
                {tableitem[3] === false ? tableitem[1] : ""}
              </div>
            </td>

            <td id="ticketname">
              {tableitem[3] === false ? tableitem[0] : ""}
            </td>

            <td>
              {tableitem[3] === false ? (tableitem[2] ? "true" : "false") : ""}
            </td>

            <td>
              {tableitem[3] === false ? (tableitem[3] ? "true" : "false") : ""}
            </td>
          </tr>
        ))}
      </table>
      <br />
      <br />
    </div>
  );
};

export default AdminTicketDetails;
