import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { BrowserRouter } from "react-router-dom";
import { FetchLogin, FetchProfile } from "./store/user-slice";
import { useSelector, useDispatch } from "react-redux";
export default function App() {
  const x = useSelector((state) => state);

  console.log(x);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchLogin({ username: "demo@mail.com", password: "password" }));
  }, []);
/*   useEffect(() => {
    if (!user && token) dispatch(FetchProfile());
  }, [token, user]); */

  return (
    <BrowserRouter basename="/">
      <Container maxWidth="sm">
        <Box my={4}>{'v'}</Box>
        <Button>X</Button>
      </Container>
    </BrowserRouter>
  );
}
