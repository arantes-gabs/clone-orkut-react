import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";

import "./card.scss";

const CardCommunity = ({ plan }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={plan.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {plan.title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {plan.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="#">
          Saber mais
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardCommunity;
