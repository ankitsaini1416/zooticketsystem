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

  return (
    <div>
      <h1>Admin Ticket Details</h1>
      <table>
        <tr>
          <th>Ticket No.</th>
          <th>Ticket Type</th>
          <th>Quantity</th>
          <th>Active</th>

          <th>Assigned</th>
          <th>Manage Time</th>

          {/* <th>Name</th> */}
        </tr>
        <tr>
          <td>{table.ticketNo}</td>
          <td>{table.ticketVal}</td>
          <td>{table.inc}</td>
          <td>{JSON.stringify(table.active)}</td>

          <td>{JSON.stringify(table.assigned)}</td>
          <td>
            {ticketVal === "general" ? (
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
            ) : ticketVal === "premium" ? (
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

          {/* <td>{userName[0].name}</td> */}
        </tr>
      </table>
      <br />
      <br />
    </div>
  );
};

export default AdminTicketDetails;
