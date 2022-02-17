// import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AllUserNav from "../AllUserNav";

let ticketId = {
  general: "yellow",
  premium: "orange",
  vip: "pink",
};

const TicketList = (props) => {
  console.log("pro", props);
  const userName = JSON.parse(localStorage.getItem("UserValues"));
  console.log("userName", JSON.stringify(userName.name));
  const table = JSON.parse(localStorage.getItem("table"));
  console.log("table", table);
  const [buyTicket, setBuyTicket] = useState(true);
  const handleClick = (i) => {
    const data = JSON.parse(localStorage.getItem("table"));
    // const passTicketData = JSON.parse(localStorage.getItem("passTicket"));

    data[i][2] = buyTicket;
    data[i][3] = buyTicket;
    // passTicketData[i][2] = buyTicket;
    // passTicketData[i][3] = buyTicket;

    localStorage.setItem("buy", buyTicket);
    localStorage.setItem("table", JSON.stringify(data));
    // localStorage.setItem("passTicket", JSON.stringify(passTicketData));

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
      {/* <Button href="/user/userticketdetails" onClick={handleClick}>
        Buy Ticket
      </Button> */}
    </div>
  );
};

export default TicketList;
