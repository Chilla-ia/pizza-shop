import React from "react";
import { CircularProgress, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { useQuery } from "react-query";

import { theme } from "./theme";
import Header from "../Header";
import PizzaList from "../PizzaList";
import PopinCart from "../PopinCart";

const fetchPizzas = () => {
  const baseUrlApi =
    process.env.REACT_APP_BASE_URL_API || "http://localhost:3001";

  return fetch(`${baseUrlApi}/pizzas`).then((response) => response.json());
};

export default function App() {
  const { status, data } = useQuery("pizzas", fetchPizzas);
  const [popinCartOpen, setPopinCardOpen] = React.useState(false);

  const displayPopinCart = () => {
    setPopinCardOpen(true);
  };
  const hidePopinCart = () => {
    setPopinCardOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header shoppingCartCount={3} displayPopinCart={displayPopinCart} />
      {status === "loading" && <CircularProgress />}
      {status === "success" && <PizzaList data={data} />}
      <PopinCart open={popinCartOpen} hidePopinCart={hidePopinCart} />
    </ThemeProvider>
  );
}
