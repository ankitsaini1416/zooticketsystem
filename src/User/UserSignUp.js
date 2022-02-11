import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Formik, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
import TextError from "./TextError";
import { Field } from "formik";
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const UserSignUp = () => {
  let history = useHistory();
  const initialValues = {
    // id:uuidv4(),
    // id:new Date().getTime().toString(),
    name: "",
    phonenumber: "",
    email: "",
    password: "",
  };
  const classes = useStyles();
  const onSubmit = function (values, { resetForm }) {
    var existingEntries = JSON.parse(localStorage.getItem("UserValues"));
    if (existingEntries == null) existingEntries = [];
    existingEntries.push(values);
    localStorage.setItem("UserValues", JSON.stringify(existingEntries));
    resetForm();
    return history.push("/usersignin");
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            User Sign Up
          </Typography>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
              <Field type="file" id="myFile" name="filename" />
              <Field
                variant="outlined"
                margin="normal"
                required
                fullWidth
                placeholder="name"
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <br />
              <Field
                variant="outlined"
                margin="normal"
                required
                fullWidth
                placeholder="phonenumber"
                id="phonenumber"
                label="Phon Number"
                name="phonenumber"
                autoComplete="phonenumber"
                autoFocus
              />
              <br />
              <Field
                variant="outlined"
                margin="normal"
                required
                fullWidth
                placeholder="email"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <br />
              <ErrorMessage
                name="email"
                className="error"
                component={TextError}
              />
              <br />
              <Field
                variant="outlined"
                margin="normal"
                required
                fullWidth
                placeholder="password"
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <br />
              <ErrorMessage
                name="password"
                className="error"
                component={TextError}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
};

export default UserSignUp;