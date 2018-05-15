import React from "react";
import { Button, ListGroupItem } from "mdbreact";

const Article = ({ imgSrc, name, description, price }) => (
  <ListGroupItem>
    <img alt="{name}" src={imgSrc} />
    <h4>{name}</h4>
    <p>{description}</p>
    <p>{price} €</p>
    <Button color="primary">Supprimer</Button>
  </ListGroupItem>
);

export default Article;
