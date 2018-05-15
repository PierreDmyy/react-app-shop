// TODO Panier qui affiche le panier
import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';
import ListArticle from './ListArticle';

class Panier extends Component {
  constructor() {
    super();
    //state initial
    this.state = {
      articles: [
        {
          name: 'Sac croco des îles',
          price: 1700,
          imgSrc:
            'https://guesseu.scene7.com/is/image/GuessEU/HWCG6216060-BLA-ALT2?wid=414&fmt=jpeg&qlt=70&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0'
        },
        {
          name: 'Sac croco de la jungle',
          price: 4500,
          imgSrc:
            'http://grenouillerouge.com/377-large_default/sac-croco-bleu.jpg'
        },
        {
          name: 'Sac croco des océans',
          price: 6800,
          imgSrc:
            'https://www.valoisvintage-paris.com/4027-20474-thickbox_default/sac-de-jour-baby-yves-saint-laurent-croco-bleu-roi.jpg'
        }
      ]
    };
  }

  render() {
    return (
      <Container>
        <ListArticle articles={this.state.articles} />
        <Button color="primary">Commander</Button>
      </Container>
    );
  }
}

export default Panier;
