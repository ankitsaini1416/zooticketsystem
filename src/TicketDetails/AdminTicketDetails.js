import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";

const AdminTicketDetails = () => {
  const userName = JSON.parse(localStorage.getItem("UserValues"));
  console.log("userName", JSON.stringify(userName.name));
  const table = JSON.parse(localStorage.getItem("table"));
  console.log("table", table);

  const [birds, setBirds] = useState(false);
  const data = JSON.parse(localStorage.getItem("table"));

  const handleClick = (i) => {
    console.log("data", data, i);
    data[i][4].bird = birds;
    localStorage.setItem("birds", birds);

    localStorage.setItem("table", JSON.stringify(data));

    setBirds(!birds);
  };
  const [mammels, setMammels] = useState(false);
  const handleClick1 = (i) => {
    data[i][4].mammel = mammels;

    localStorage.setItem("mammels", mammels);
    localStorage.setItem("table", JSON.stringify(data));

    setMammels(!mammels);
  };
  const [waterWorld, setWaterWorld] = useState(true);
  const handleClick2 = (i) => {
    data[i][4].waterworld = waterWorld;

    localStorage.setItem("waterWorld", waterWorld);
    localStorage.setItem("table", JSON.stringify(data));

    setWaterWorld(!waterWorld);
  };
  const [exoticAnimals, setExoticAnimals] = useState(true);
  const handleClick3 = (i) => {
    data[i][4].exoticanimals = exoticAnimals;

    localStorage.setItem("exoticAnimals", exoticAnimals);
    localStorage.setItem("table", JSON.stringify(data));

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
        </tr>
        {JSON.parse(localStorage.getItem("table"))?.map((tableitem, i) => (
          <tr key={i}>
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

            <td>{tableitem[2]}</td>

            <td>{tableitem[3]}</td>
            <td>
              {tableitem[0] === "general" ? (
                <>
                  <p>
                    Birds
                    <Checkbox onClick={() => handleClick(i)} />
                    {tableitem[4].bird ? "true" : "false"}
                  </p>
                  <p>
                    Mammels
                    <Checkbox onClick={() => handleClick1(i)} />
                    {tableitem[4].mammel ? "true" : "false"}
                  </p>
                </>
              ) : tableitem[0] === "premium" ? (
                <>
                  <p>
                    Birds
                    <Checkbox onClick={() => handleClick(i)} />
                    {tableitem[4].bird ? "true" : "false"}
                  </p>
                  <p>
                    Mammels
                    <Checkbox onClick={() => handleClick1(i)} />
                    {tableitem[4].mammel ? "true" : "false"}
                  </p>
                  <p>
                    WaterWorld
                    <Checkbox onClick={() => handleClick2(i)} />
                    {tableitem[4].waterworld ? "true" : "false"}
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Birds
                    <Checkbox onClick={() => handleClick(i)} />
                    {tableitem[4].bird ? "true" : "false"}
                  </p>
                  <p>
                    Mammels
                    <Checkbox onClick={() => handleClick1(i)} />
                    {tableitem[4].mammel ? "true" : "false"}
                  </p>
                  <p>
                    WaterWorld
                    <Checkbox onClick={() => handleClick2(i)} />
                    {tableitem[4].waterworld ? "true" : "false"}
                  </p>
                  <p>
                    Exotic Animals
                    <Checkbox onClick={() => handleClick3(i)} />
                    {tableitem[4].exoticanimals ? "true" : "false"}
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

export default AdminTicketDetails;
