import React, { useEffect } from "react";

const UserTicketDetails = (props) => {
  // let passTicket = props.location.state.map((value, i) => {
  //   if (i === 4) {
  //     return value.bird === false ? "false" : "true";
  //   }
  //   return value;
  // });

  var existData = JSON.parse(localStorage.getItem("passTicket"));
  // var existData = [];
  console.log(localStorage.getItem("passTicket"));
  if (existData == null) existData = [];

  existData.push(props.location.state);
  localStorage.setItem("passTicket", JSON.stringify(existData));

  const userName = JSON.parse(localStorage.getItem("UserValues"));
  console.log("userName", JSON.stringify(userName.name));
  const table = JSON.parse(localStorage.getItem("table"));
  console.log("table", table);

  let ticketId = {
    general: "yellow",
    premium: "orange",
    vip: "pink",
  };

  return (
    <div>
      <h1>User Ticket Details</h1>

      <table>
        <tr>
          <th>Ticket No.</th>
          <th>Ticket Type</th>

          <th>Active</th>

          <th>Assigned</th>
          <th>Valid Time</th>
        </tr>
        {JSON.parse(localStorage.getItem("passTicket"))?.map((tableitem, i) => (
          <tr key={i}>
            {console.log("tableitem", tableitem)}
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
            <td id="ticketname">{tableitem[2] ? "true" : "false"}</td>
            <td id="ticketname">{tableitem[3] ? "true" : "false"}</td>
          </tr>
        ))}
      </table>
      <br />
      <br />
    </div>
  );
};

export default UserTicketDetails;
