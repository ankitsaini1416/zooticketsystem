import React, { useEffect, useState } from "react";

const UserTicketDetails = (props) => {
  // let passTicket = props.location.state.map((value, i) => {
  //   if (i === 4) {
  //     return value.bird === false ? "false" : "true";
  //   }
  //   return value;
  // });
  if (props.location.state) {
    var existData = JSON.parse(localStorage.getItem("passTicket"));
    // var existData = [];
    console.log(localStorage.getItem("passTicket"));
    let flag = false;
    if (existData == null) {
      existData = [];
    } else {
      for (let a of existData) {
        console.log("a", a, "b", props.location.state);
        console.log("aa", props.location.state);
        if (a[1] === props.location.state[1]) {
          flag = true;
          break;
        }
      }
    }
    if (!flag) {
      existData.push(props.location.state);
      localStorage.setItem("passTicket", JSON.stringify(existData));
    }
  }
  const cancelTicket = JSON.parse(localStorage.getItem("cancelTicket"));
  // console.log("buy", buy);
  const userName = JSON.parse(localStorage.getItem("UserValues"));
  console.log("userName", JSON.stringify(userName.name));
  const table = JSON.parse(localStorage.getItem("table"));
  console.log("table", table);
  const [buyTicket, setBuyTicket] = useState(true);
  const handleClick = (i) => {
    const data = JSON.parse(localStorage.getItem("table"));

    data[i][2] = !buyTicket;
    data[i][3] = !buyTicket;

    localStorage.setItem("cancelTicket", buyTicket);
    localStorage.setItem("table", JSON.stringify(data));
    setBuyTicket(!buyTicket);
  };

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
            <td id="ticketname">{cancelTicket ? "false" : "true"}</td>
            <td id="ticketname">{cancelTicket ? "false" : "true"}</td>
            <td>
              {tableitem[4].bird &&
              tableitem[4].mammel &&
              tableitem[4].waterworld &&
              tableitem[4].exoticanimals === true
                ? "expired"
                : "valid"}
            </td>
            <td>
              <button onClick={() => handleClick(i)}>
                {cancelTicket === false ? "cancelTicket" : "undo"}
              </button>
            </td>
          </tr>
        ))}
      </table>
      <br />
      <br />
    </div>
  );
};

export default UserTicketDetails;
