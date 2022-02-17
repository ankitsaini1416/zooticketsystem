import React, { useState } from "react";
import { Link } from "react-router-dom";
import AllUserNav from "../AllUserNav";

let ticketId = {
  general: "yellow",
  premium: "orange",
  vip: "pink",
};

const TicketList = (props) => {
  const [buyTicket, setBuyTicket] = useState(true);
  const handleClick = (i) => {
    const data = JSON.parse(localStorage.getItem("table"));

    data[i][2] = buyTicket;
    data[i][3] = buyTicket;

    localStorage.setItem("buy", buyTicket);
    localStorage.setItem("table", JSON.stringify(data));

    setBuyTicket(!buyTicket);
  };
  return (
    <div>
      <AllUserNav />
      <h1>Ticket List</h1>
      <table>
        <tr>
          <th>Ticket No.</th>
          <th>Ticket Type</th>
          <th>Active</th>

          <th>Assigned</th>
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
              {tableitem[3] === true ? (
                "buyed"
              ) : (
                <Link
                  onClick={() => handleClick(i)}
                  to={{
                    pathname: "/user/userticketdetails",

                    state: tableitem,
                  }}
                >
                  Buy
                </Link>
              )}
            </td>
          </tr>
        ))}
      </table>
      <br /> <br /> <br /> <br />
      <br />
      <br />
    </div>
  );
};

export default TicketList;
