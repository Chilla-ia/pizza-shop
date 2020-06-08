import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { arrayOf, number, string } from "prop-types";

const imgSize = 175;

const useStyles = makeStyles({
  root: {
    maxWidth: imgSize,
  },
});

export default function PizzaCard({ name, ingredients, price }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt={name}
        height={imgSize}
        image={`https://picsum.photos/3${imgSize * 2}`}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {ingredients.join(", ")}
        </Typography>
        <Typography variant="h4" component="p">
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
}

PizzaCard.propTypes = {
  name: string.isRequired,
  ingredients: arrayOf(string).isRequired,
  price: number.isRequired,
};
