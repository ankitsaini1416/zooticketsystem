import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";

const AdminTicketDetails = () => {
  const userName = JSON.parse(localStorage.getItem("UserValues"));
  console.log("userName", JSON.stringify(userName.name));
  const table = JSON.parse(localStorage.getItem("table"));
  console.log("table", table);
  const ticketVal = localStorage.getItem("ticketType");
  const active = localStorage.getItem("activestatus");
  const assign = localStorage.getItem("assignstatus");

  const [birds, setBirds] = useState(true);
  const handleClick = () => {
    localStorage.setItem("birds", birds);
    setBirds(!birds, !active);
    localStorage.setItem("activestatus", !active);
    localStorage.setItem("assignstatus", !assign);
  };
  const [mammels, setMammels] = useState(true);
  const handleClick1 = () => {
    localStorage.setItem("mammels", mammels);
    setMammels(!mammels);
  };
  const [waterWorld, setWaterWorld] = useState(true);
  const handleClick2 = () => {
    localStorage.setItem("waterWorld", waterWorld);
    setWaterWorld(!waterWorld);
  };
  const [exoticAnimals, setExoticAnimals] = useState(true);
  const handleClick3 = () => {
    localStorage.setItem("exoticAnimals", exoticAnimals);
    setExoticAnimals(!exoticAnimals);
  };
  let ticketId = {
    general: "yellow",
    premium: "orange",
    vip: "pink",
  };

  return (
    <div>
      <h1>Admin Ticket Details</h1>
      <table>
        <tr>
          <th>Ticket No.</th>
          <th>Ticket Type</th>
          <th>Active</th>

          <th>Assigned</th>
          <th>Manage Time</th>

          {/* <th>Name</th> */}
        </tr>
        {JSON.parse(localStorage.getItem("table"))?.map((tableitem, i) => (
          <tr key={i}>
            <td>
              <div
                style={{
                  backgroundColor: ticketId[tableitem[0]],
                }}
              >
                {/* PRE-{Math.floor(Math.random() * 10000) + 1} */}
                {tableitem[1]}
              </div>
              {/* ) : ticketVal === "vip" ? (
                              <div style={{ backgroundColor: "pink" }}>
                                {tableitem[1]}
                              </div>
                            ) : (
                              <div style={{ backgroundColor: "yellow" }}>
                                {tableitem[1]}
                              </div>
                            )} */}
            </td>
            {/* <td>{ticketVal}</td> */}
            <td id="ticketname">{tableitem[0]}</td>

            <td>{tableitem[2]}</td>

            <td>{tableitem[3]}</td>
            <td>
              {tableitem[0] === "general" ? (
                <>
                  <p>
                    Birds
                    <Checkbox onClick={handleClick} />
                  </p>
                  <p>
                    Mammels
                    <Checkbox onClick={handleClick1} />
                  </p>
                </>
              ) : tableitem[0] === "premium" ? (
                <>
                  <p>
                    Birds
                    <Checkbox onClick={handleClick} />
                  </p>
                  <p>
                    Mammels
                    <Checkbox onClick={handleClick1} />
                  </p>
                  <p>
                    WaterWorld
                    <Checkbox onClick={handleClick2} />
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Birds
                    <Checkbox onClick={handleClick} />
                  </p>
                  <p>
                    Mammels
                    <Checkbox onClick={handleClick1} />
                  </p>
                  <p>
                    WaterWorld
                    <Checkbox onClick={handleClick2} />
                  </p>
                  <p>
                    Exotic Animals
                    <Checkbox onClick={handleClick3} />
                  </p>
                </>
              )}
            </td>

            {/* <td>{buyTicket === true ? userName[0].name : null}</td> */}
          </tr>
        ))}
      </table>
      <br />
      <br />
    </div>
  );
};

export default AdminTicketDetails;
