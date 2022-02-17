import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
import AllNav from "../AllNav";

import { Button } from "@material-ui/core";
const BookTicket = () => {
  const [inc, setInc] = useState(0);
  const [ticketNo, setTicketNo] = useState("");
  const [active] = useState(false);
  const ticketVal = localStorage.getItem("ticketType");
  const [assigned] = useState(false);

  let ticketId = {
    general: "yellow",
    premium: "orange",
    vip: "pink",
  };
  let visitField = {
    general: { bird: false, mammel: false },
    premium: { bird: false, mammel: false, waterworld: false },
    vip: {
      bird: false,
      mammel: false,
      waterworld: false,
      exoticanimals: false,
    },
  };

  const addingSome = () => {
    let values = {
      ticketName: document.getElementById("ticket").value,
    };
    let tk = "";
    for (let i = 0; i < inc; i++) {
      tk =
        localStorage.getItem("ticketType") === "premium"
          ? "PRE-" + Math.floor(Math.random() * 10000) + 1
          : localStorage.getItem("ticketType") === "vip"
          ? "VIP-" + Math.floor(Math.random() * 10000) + 1
          : "GEN-" + Math.floor(Math.random() * 10000) + 1;
      setTicketNo(tk);
      var existingEntries = JSON.parse(localStorage.getItem("table"));
      if (existingEntries == null) existingEntries = [];
      let arr = [];
      arr.push([
        values.ticketName,
        tk,
        active,
        assigned,
        visitField[values.ticketName],
      ]);
      existingEntries = [...existingEntries, ...arr];
      dispatch(
        addTodo(
          localStorage.setItem("table", JSON.stringify(existingEntries)),
          setInc(0)
        )
      );
    }
  };

  const dispatch = useDispatch();
  const handleChange = (event) => {
    localStorage.setItem("ticketType", event.target.value);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <AllNav />
          <table>
            <tr>
              <th>Ticket Category</th>
              <th>visit</th>
            </tr>
            <tr>
              <td style={{ backgroundColor: "yellow" }}>General</td>
              <td>Birds, Mammels</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "orange" }}>Premium</td>
              <td>Birds, Mammels, water world</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "pink" }}>VIP</td>
              <td>Birds, Mammels, water world, exotic animals</td>
            </tr>
          </table>
          <figure>
            <figcaption>Select Your Ticket</figcaption>
          </figure>
          <div className="addItems">
            <select
              name="cars"
              id="ticket"
              onChange={handleChange}
              value={ticketVal}
            >
              <option value="" label="Select a color" />
              <option value="general">general</option>
              <option value="premium">premium</option>
              <option value="vip">VIP</option>
            </select>
            <Button
              className="quantity-minus"
              onClick={() => dispatch(setInc(inc - 1))}
            >
              <span> - </span>
            </Button>
            <input
              name="quantity"
              type="text"
              className="quantity-input"
              value={inc}
            />
            <Button
              className="quantity-plus"
              onClick={() => dispatch(setInc(inc + 1))}
            >
              <span> + </span>
            </Button>

            <button
              type="submit"
              className="fa-solid fa-plus"
              onClick={() => addingSome()}
            >
              Add
            </button>
          </div>
          <div className="showItems">
            <table>
              <tr>
                <th>ticketNo</th>
                <th>TicketType</th>
                <th>Active</th>
                <th>Assigned</th>
              </tr>

              {JSON.parse(localStorage.getItem("table"))?.map(
                (tableitem, i) => (
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

                    <td id="activestatus">{tableitem[2] ? "true" : "false"}</td>
                    <td id="assignstatus">{tableitem[3] ? "true" : "false"}</td>
                  </tr>
                )
              )}
            </table>
            <div className="todo-btn">
              <i className="far fa-trash-alt add-btn" title="delete item" />
            </div>
          </div>

          <div className="showItems"></div>
        </div>
      </div>
    </>
  );
};
export default BookTicket;
