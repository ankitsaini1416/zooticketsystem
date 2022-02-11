import { Button } from "@material-ui/core";
import React, { useState } from "react";

const TicketList = () => {
  // const table = localStorage.getItem("table");
  // console.log("table", table);
  const userName = JSON.parse(localStorage.getItem("UserValues"));
  console.log("userName", JSON.stringify(userName.name));
  const table = JSON.parse(localStorage.getItem("table"));
  console.log("table", table);
  const [buyTicket, setBuyTicket] = useState(true);
  const handleClick = () => {
    localStorage.setItem("buytickets", buyTicket);
    setBuyTicket(!buyTicket);
  };

  return (
    <div>
      <h1>Ticket List</h1>
      <table>
        <tr>
          <th>Ticket No.</th>
          <th>Ticket Type</th>
          <th>Quantity</th>
          <th>Active</th>

          <th>Assigned</th>
          {/* <th>Name</th> */}
        </tr>
        <tr>
          <td>{table.ticketNo}</td>
          <td>{table.ticketVal}</td>
          <td>{table.inc}</td>
          <td>false</td>

          <td>false</td>
          {/* <td>{userName[0].name}</td> */}
        </tr>
      </table>
      <br />
      <br />
      <Button href="/userticketdetails" onClick={handleClick}>
        Buy Ticket
      </Button>
    </div>
  );
};

export default TicketList;
