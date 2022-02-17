import React from "react";

import Navbar from "./Navbar";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import AdminLogin from "./Admin/AdminLogin";
import UserSignUp from "./User/UserSignUp";
import UserSignIn from "./User/UserSignIn";
import UsersList from "./User/UsersList";
import BookTicket from "./TicketDetails/BookTicket";
import TicketList from "./TicketDetails/TicketList";
import AdminTicketList from "./TicketDetails/AdminTicketList";
import UserTicketDetails from "./TicketDetails/UserTicketDetails";
import AdminTicketDetails from "./TicketDetails/AdminTicketDetails";
// import AllNav from "./AllNav";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Navbar />
        </Route>

        <Route exact path="/admin/adminlogin" component={AdminLogin} />
        <Route exact path="/user/usersignup" component={UserSignUp} />
        <Route exact path="/user/usersignin" component={UserSignIn} />
        <Route path="/admin/UsersList" component={UsersList}></Route>
        <Route exact path="/admin/addticket" component={BookTicket} />
        <Route
          exact
          path="/admin/adminticketlist"
          component={AdminTicketList}
        />

        <Route exact path="/user/ticketlist" component={TicketList} />
        <Route
          exact
          path="/user/userticketdetails"
          component={UserTicketDetails}
        />
        <Route
          exact
          path="/admin/adminticketdetails"
          component={AdminTicketDetails}
        />
      </Switch>
    </>
  );
};

export default App;
