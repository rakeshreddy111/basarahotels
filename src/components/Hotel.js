import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../App.css';

class Hotel extends Component {
    render() {
      return (
        <div>
        <h3>Hotel 1</h3>
        <Card>
        <CardImg top width="100%" src="http://www.bestwesternplusmeridian.com/Content/images/Queen-Room-o.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card content.</CardText>
          <a class="book" href="portfolio.html">BOOK</a>
        </CardBody>
      </Card>

      <Card>
        <CardImg top width="25%" src="http://www.bestwesternplusmeridian.com/Content/images/exicutiveroom_o.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card content.</CardText>
          <a class="book" href="portfolio.html">BOOK</a>
        </CardBody>
      </Card>

      <Card>
        <CardImg top width="25%" src="http://www.bestwesternplusmeridian.com/Content/images/queen_junior_suites_o.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card content.</CardText>
          <a class="book" href="portfolio.html">BOOK</a>
        </CardBody>
      </Card>

        </div>
      );
    }
  }
  
  export default Hotel;