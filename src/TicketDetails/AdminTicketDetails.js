import React from "react";
// import Checkbox from "@material-ui/core/Checkbox";
import AllNav from "../AllNav";

const AdminTicketDetails = () => {
  const userName = JSON.parse(localStorage.getItem("UserValues"));
  console.log("userName", JSON.stringify(userName.name));
  const table = JSON.parse(localStorage.getItem("table"));
  console.log("table", table);

  // const [birds, setBirds] = useState(false);
  // const data = JSON.parse(localStorage.getItem("table"));

  // const handleClick = (i) => {
  //   console.log("data", data, i);
  //   data[i][4].bird = birds;
  //   localStorage.setItem("birds", birds);

  //   localStorage.setItem("table", JSON.stringify(data));

  //   setBirds(!birds);
  // };
  // const [mammels, setMammels] = useState(false);
  // const handleClick1 = (i) => {
  //   data[i][4].mammel = mammels;

  //   localStorage.setItem("mammels", mammels);
  //   localStorage.setItem("table", JSON.stringify(data));

  //   setMammels(!mammels);
  // };
  // const [waterWorld, setWaterWorld] = useState(true);
  // const handleClick2 = (i) => {
  //   data[i][4].waterworld = waterWorld;

  //   localStorage.setItem("waterWorld", waterWorld);
  //   localStorage.setItem("table", JSON.stringify(data));

  //   setWaterWorld(!waterWorld);
  // };
  // const [exoticAnimals, setExoticAnimals] = useState(true);
  // const handleClick3 = (i) => {
  //   data[i][4].exoticanimals = exoticAnimals;

  //   localStorage.setItem("exoticAnimals", exoticAnimals);
  //   localStorage.setItem("table", JSON.stringify(data));

  //   setExoticAnimals(!exoticAnimals);
  // };
  let ticketId = {
    general: "yellow",
    premium: "orange",
    vip: "pink",
  };

  return (
    <div>
      <AllNav />
      <h1>Unassigned Tickets</h1>
      <table>
        <tr>
          <th>Ticket No.</th>
          <th>Ticket Type</th>
          <th>Active</th>

          <th>Assigned</th>
        </tr>
        {JSON.parse(localStorage.getItem("table"))?.map((tableitem, i) => (
          <tr key={i}>
            <td>
              <div
                style={{
                  backgroundColor: ticketId[tableitem[0]],
                }}
              >
                {tableitem[3] === false ? tableitem[1] : ""}
              </div>
            </td>

            <td id="ticketname">
              {tableitem[3] === false ? tableitem[0] : ""}
            </td>

            <td>
              {tableitem[3] === false ? (tableitem[2] ? "true" : "false") : ""}
            </td>

            <td>
              {tableitem[3] === false ? (tableitem[3] ? "true" : "false") : ""}
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
