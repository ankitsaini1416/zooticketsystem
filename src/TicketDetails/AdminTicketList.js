import React, { useState } from "react";
// import { Button } from "@material-ui/core";

import Checkbox from "@material-ui/core/Checkbox";
import AllNav from "../AllNav";

const userName = JSON.parse(localStorage.getItem("UserValues"));
const userSignin = JSON.parse(localStorage.getItem("UserSigninValues"));
// console.log("userName2", JSON.stringify(userName[0].name), userName);

const AdminTicketList = () => {
  const table = JSON.parse(localStorage.getItem("table"));
  console.log("table", table);
  // const buyticket = JSON.parse(localStorage.getItem("buytickets"));
  const [birds, setBirds] = useState(true);
  const data = JSON.parse(localStorage.getItem("passTicket"));

  const handleClick = (i) => {
    console.log("data", data, i);
    data[i][4].bird = birds;
    localStorage.setItem("birds", birds);

    localStorage.setItem("passTicket", JSON.stringify(data));

    setBirds(!birds);
  };
  const [mammels, setMammels] = useState(true);
  const handleClick1 = (i) => {
    data[i][4].mammel = mammels;

    localStorage.setItem("mammels", mammels);
    localStorage.setItem("passTicket", JSON.stringify(data));

    setMammels(!mammels);
  };
  const [waterWorld, setWaterWorld] = useState(true);
  const handleClick2 = (i) => {
    data[i][4].waterworld = waterWorld;

    localStorage.setItem("waterWorld", waterWorld);
    localStorage.setItem("passTicket", JSON.stringify(data));

    setWaterWorld(!waterWorld);
  };
  const [exoticAnimals, setExoticAnimals] = useState(true);
  const handleClick3 = (i) => {
    data[i][4].exoticanimals = exoticAnimals;

    localStorage.setItem("exoticAnimals", exoticAnimals);
    localStorage.setItem("passTicket", JSON.stringify(data));

    setExoticAnimals(!exoticAnimals);
  };
  const cancelTicket = JSON.parse(localStorage.getItem("cancelTicket"));

  let ticketId = {
    general: "yellow",
    premium: "orange",
    vip: "pink",
  };

  return (
    <div>
      <AllNav />
      <h1>Admin Ticket List</h1>
      <table>
        <tr>
          <th>Ticket No.</th>
          <th>Ticket Type</th>
          <th>Active</th>
          <th>Assigned</th>
          <th>ManageTime</th>
          <th>Name</th>
        </tr>
        {JSON.parse(localStorage.getItem("passTicket"))?.map((tableitem, i) => (
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
            <td id="ticketname">{cancelTicket ? "false" : "true"}</td>
            <td id="ticketname">{cancelTicket ? "false" : "true"}</td>
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
            <td>
              {console.log(tableitem[3])}
              {tableitem[3] === true
                ? userName.map((currVal) => {
                    console.log("curr", currVal);
                    if (currVal.email === userSignin.email) {
                      return currVal.name;
                    }
                    return "";
                  })
                : ""}
            </td>
          </tr>
        ))}
      </table>
      <br />
      <br />
      {/* <Button href="/admin/adminticketdetails">Admin Ticket Details</Button> */}
    </div>
  );
};

export default AdminTicketList;
