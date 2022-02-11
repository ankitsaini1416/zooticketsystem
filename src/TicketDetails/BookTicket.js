import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../actions";
// import { FontAwesomeIcon } from "font-awesome";
// import { incNumber, decNumber } from "../actions";
import Checkbox from "@material-ui/core/Checkbox";
import { Button } from "@material-ui/core";
const BookTicket = () => {
  // console.log("ticketVal", ticketVal);
  // const [inputData, setInputData] = useState("");
  const [inc, setInc] = useState(0);
  const [ticketNo, setTicketNo] = useState("");
  const [active, setActive] = useState(true);
  const ticketVal = localStorage.getItem("ticketType");
  const [assigned, setAssigned] = useState(true);

  const handleClick = () => {
    localStorage.setItem("activestatus", active);
    setActive(!active);
  };
  const handleClick1 = () => {
    localStorage.setItem("assignstatus", assigned);
    setAssigned(!assigned);
  };

  // const myState = useSelector((state) => state.changeTheNumber);
  const addingSome = () => {
    const tk =
      localStorage.getItem("ticketType") === "premium"
        ? "PRE-" + Math.floor(Math.random() * 10000) + 1
        : localStorage.getItem("ticketType") === "vip"
        ? "VIP-" + Math.floor(Math.random() * 10000) + 1
        : "GEN-" + Math.floor(Math.random() * 10000) + 1;
    setTicketNo(tk);
    dispatch(
      addTodo(
        localStorage.setItem(
          "table",
          JSON.stringify({
            ticketVal,
            inc,
            ticketNo: tk,
          })
        )
      )
    );
  };
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    localStorage.setItem("ticketType", event.target.value);
  };

  const userName = JSON.parse(localStorage.getItem("UserValues"));
  console.log("userName", userName.name);

  // const buyTicket = JSON.parse(localStorage.getItem("buytickets"));/
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Select Your Ticket</figcaption>
          </figure>
          <div className="addItems">
            {/* <input
              type="text"
              placeholder="Add items.."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            /> */}
            <select
              name="cars"
              id="cars"
              onChange={handleChange}
              value={ticketVal}
            >
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
            {/* <FontAwesomeIcon icon="fa-solid fa-plus" /> */}
            <button
              className="fa-solid fa-plus"
              onClick={() =>
                // localStorage.setItem(
                //   "table",
                //   JSON.stringify(dispatch(addTodo(inputData)), setInputData(""))
                // )
                addingSome()
              }
            >
              Add
            </button>
          </div>
          {console.log("ticketNo", ticketNo)}
          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <table>
                    <tr>
                      <th>ticketNo</th>
                      <th>Ticket Type</th>
                      <th> Quantity</th>

                      <th>Active</th>
                      <th>Assigned</th>
                      {/* <th>Name</th> */}
                    </tr>
                    <tr>
                      <td>
                        {ticketVal === "premium" ? (
                          <div style={{ backgroundColor: "orange" }}>
                            {/* PRE-{Math.floor(Math.random() * 10000) + 1} */}
                            {JSON.parse(localStorage.getItem("table")).ticketNo}
                          </div>
                        ) : ticketVal === "vip" ? (
                          <div style={{ backgroundColor: "pink" }}>
                            {/* VIP-{Math.floor(Math.random() * 10000) + 1} */}
                            {JSON.parse(localStorage.getItem("table")).ticketNo}
                          </div>
                        ) : (
                          <div style={{ backgroundColor: "yellow" }}>
                            {/* GEN-{Math.floor(Math.random() * 10000) + 1} */}
                            {JSON.parse(localStorage.getItem("table")).ticketNo}
                          </div>
                        )}
                      </td>
                      {/* <td>{ticketVal}</td> */}
                      <td>{ticketVal}</td>
                      <td>{inc}</td>
                      <Checkbox onClick={handleClick} />
                      <Checkbox onClick={handleClick1} />

                      {/* <td>{buyTicket === true ? userName[0].name : null}</td> */}
                    </tr>
                  </table>
                  <div className="todo-btn">
                    <i
                      className="far fa-trash-alt add-btn"
                      title="delete item"
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <Button
              className="btn effect04"
              data-sm-link-text="removeAll"
              href="adminticketlist"
            >
              <span>user Ticket List</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookTicket;
