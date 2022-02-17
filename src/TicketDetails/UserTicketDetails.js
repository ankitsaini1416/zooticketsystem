import React from "react";
import AllUserNav from "../AllUserNav";

const UserTicketDetails = (props) => {
  if (props.location.state) {
    var existData = JSON.parse(localStorage.getItem("passTicket"));
    console.log(localStorage.getItem("passTicket"));
    let flag = false;
    if (existData == null) {
      existData = [];
    } else {
      for (let a of existData) {
        if (a[1] === props.location.state[1]) {
          flag = true;
          break;
        }
      }
    }
    if (!flag) {
      props.location.state[2] = true;
      props.location.state[3] = true;

      existData.push(props.location.state);
      localStorage.setItem("passTicket", JSON.stringify(existData));
    }
  }

  let ticketId = {
    general: "yellow",
    premium: "orange",
    vip: "pink",
  };

  return (
    <div>
      <AllUserNav />
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
            <td>
              {tableitem[0] === "general" ? (
                <>
                  <p>
                    Birds-
                    {tableitem[4].bird === true ? "expired" : "valid"}
                  </p>
                  <p>
                    Mammels-
                    {tableitem[4].mammel === true ? "expired" : "valid"}
                  </p>
                </>
              ) : tableitem[0] === "premium" ? (
                <>
                  <p>
                    Birds-
                    {tableitem[4].bird === true ? "expired" : "valid"}
                  </p>
                  <p>
                    Mammels-
                    {tableitem[4].mammel === true ? "expired" : "valid"}
                  </p>
                  <p>
                    WaterWorld-
                    {tableitem[4].waterworld === true ? "expired" : "valid"}
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Birds-
                    {tableitem[4].bird === true ? "expired" : "valid"}
                  </p>
                  <p>
                    Mammels-
                    {tableitem[4].mammel === true ? "expired" : "valid"}
                  </p>
                  <p>
                    WaterWorld-
                    {tableitem[4].waterworld === true ? "expired" : "valid"}
                  </p>
                  <p>
                    Exotic Animals-
                    {tableitem[4].exoticanimals === true ? "expired" : "valid"}
                  </p>
                </>
              )}
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
