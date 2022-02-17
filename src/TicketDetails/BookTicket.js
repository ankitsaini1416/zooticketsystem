import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addTodo, deleteTodo } from "../actions";
import { addTodo } from "../actions";
import AllNav from "../AllNav";

// import { FontAwesomeIcon } from "font-awesome";
// import { incNumber, decNumber } from "../actions";
// import Checkbox from "@material-ui/core/Checkbox";
import { Button } from "@material-ui/core";
const BookTicket = () => {
  // const userSignin = JSON.parse(localStorage.getItem("UserSigninValues"));
  // console.log("ticketVal", ticketVal);
  // const [inputData, setInputData] = useState("");
  const [inc, setInc] = useState(0);
  const [ticketNo, setTicketNo] = useState("");
  const [active] = useState(false);
  const ticketVal = localStorage.getItem("ticketType");
  const [assigned] = useState(false);

  // const handleClick = (i) => {
  //   const data = JSON.parse(localStorage.getItem("table"));

  //   data[i][2] = active;
  //   localStorage.setItem("activestatus", active);
  //   localStorage.setItem("table", JSON.stringify(data));
  //   setActive(!active);
  // };
  // const handleClick1 = (i) => {
  //   const data1 = JSON.parse(localStorage.getItem("table"));
  //   data1[i][3] = assigned;

  //   localStorage.setItem("assignstatus", assigned);
  //   localStorage.setItem("table", JSON.stringify(data1));

  //   setAssigned(!assigned);
  // };

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
      console.log("tk", tk);
      var existingEntries = JSON.parse(localStorage.getItem("table"));
      if (existingEntries == null) existingEntries = [];
      console.log("existingEntries", existingEntries, values);
      let arr = [];
      arr.push([
        values.ticketName,
        tk,
        active,
        assigned,
        visitField[values.ticketName],
      ]);
      existingEntries = [...existingEntries, ...arr];
      console.log(existingEntries, arr, JSON.stringify(existingEntries));
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

  // const userName = JSON.parse(localStorage.getItem("UserValues"));
  // console.log("userName", userName.name);

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
          {console.log("ticketNo", ticketNo)}
          <div className="showItems">
            <table>
              <tr>
                <th>ticketNo</th>
                <th>TicketType</th>
                <th>Active</th>
                <th>Assigned</th>

                {/* {JSON.parse(localStorage.getItem("table"))?.map(
                  (tableitem, i) => (
                    <th key={i}>{tableitem[3] === true ? "Name" : ""}</th>
                  )
                )} */}
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

                    <td id="activestatus">
                      {/* <Checkbox onClick={() => handleClick(i)} /> */}
                      {tableitem[2] ? "true" : "false"}
                    </td>
                    <td id="assignstatus">
                      {/* <Checkbox onClick={() => handleClick1(i)} /> */}
                      {tableitem[3] ? "true" : "false"}
                    </td>

                    {/* <td>
                      {tableitem[3] === true
                        ? userName.map((currVal) => {
                            if (currVal.email === userSignin.email) {
                              return currVal.name;
                            }
                          })
                        : null}
                    </td> */}
                  </tr>
                )
              )}
            </table>
            <div className="todo-btn">
              <i className="far fa-trash-alt add-btn" title="delete item" />
            </div>
          </div>

          <div className="showItems">
            {/* <Button
              className="btn effect04"
              data-sm-link-text="removeAll"
              href="/admin/adminticketlist"
            >
              <span>user Ticket List</span>
            </Button> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default BookTicket;
