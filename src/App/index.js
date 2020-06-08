import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import { theme } from "./theme";
import Header from "../Header";
import PizzaCard from "../PizzaCard";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header shoppingCartCount={3} />
      <PizzaCard
        name="4 fromages"
        ingredients={["Tomate", "Chevre", "Mozzarella", "Gorgonzola"]}
        imageUrl="https://picsum.photos/350"
        price={12.99}
      />
    </ThemeProvider>
  );
}
