import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { string } from "prop-types";

export default function PizzaCard({ name }) {
  return (
    <card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
      </CardContent>
    </card>
  );
}

PizzaCard.propTypes = {
  name: string.isRequired,
};
