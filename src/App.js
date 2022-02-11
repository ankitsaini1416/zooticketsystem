import React from "react";
// import AdminLogin from "./Admin/AdminLogin";
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

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Navbar />
        </Route>
        <Route exact path="/adminlogin" component={AdminLogin} />
        <Route exact path="/usersignup" component={UserSignUp} />
        <Route exact path="/usersignin" component={UserSignIn} />
        <Route exact path="/UsersList" component={UsersList} />
        <Route exact path="/bookticket" component={BookTicket} />
        <Route exact path="/adminticketlist" component={AdminTicketList} />

        <Route exact path="/ticketlist" component={TicketList} />
        <Route exact path="/userticketdetails" component={UserTicketDetails} />
        <Route
          exact
          path="/adminticketdetails"
          component={AdminTicketDetails}
        />
      </Switch>
    </>
  );
};

export default App;
