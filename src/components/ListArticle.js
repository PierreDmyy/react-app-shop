import React from "react";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const data = [
  {
    name: "Croco des îles",
    price: "1400€",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40823SUwTzYOKPbIgiXR50z6h7_5WtZ6ysJS35nHycprgmT_yxg",
    description: "Ce sac et parfait pour aller ceuillir les noix de coco!"
  },
  {
    name: "Crocos des océans",
    price: "1400€",
    imgSrc:
      "https://www.sybele.fr/image/cache/catalog/sac%20croco%20gris-400x400.JPG",
    description: "Ce sac est idéale pour pêcher des requins."
  },
  {
    name: "Crocos des forêts",
    price: "1300€",
    imgSrc:
      "https://www.jolicloset.com/img4/detail4b/2017/01/31073-1/sacs-a-main-lancel.jpg",
    description:
      "Ce sac est conçu pour aller chasser le Cerf, garde aux wilders..."
  }
];

const ListArticle = () => (
  <Card>
    {data.map(article => (
      <Container>
        <div>
          <Card>
            <CardImg top width="100%" src={article.imgSrc} alt={article.name} />
            <CardBody>
              <CardTitle>{article.name}</CardTitle>

              <CardSubtitle>{article.price}</CardSubtitle>

              <CardText>{article.description}</CardText>
            </CardBody>
          </Card>
        </div>
      </Container>
    ))}
  </Card>
);

export default ListArticle;
