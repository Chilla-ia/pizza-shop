import React from "react";

export default function useCounter(defaultState, min = 0, max){
    const [pizzaCount, setPizzaCount] = React.useState(1);
  const decrement = () => setPizzaCount(Math.max(min, pizzaCount - 1));
  const increment = () => setPizzaCount(Math.min(pizzaCount + 1, max));

  return [pizzaCount, {decrement, increment}];
}