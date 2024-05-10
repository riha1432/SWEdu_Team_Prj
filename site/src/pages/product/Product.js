/*eslint-disable*/
import NavBar from '../../components/NavBar';
import React from 'react';
import Carousel from '../../components/Carousels';
import Footer from '../../components/Footer';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function product() {
    return(
        <div>
            <NavBar/>
            <Carousel />

              <h1 className='font'>Ai농가집성마켓에는<br/>
              다양한 엽채류들🥗과<br/>
              Ai성장 기반 농산물들🥬이 있어요!
              </h1>
              <div className='jum'>
                
              </div>

            <GroupExample />
            <Footer />
        </div>

);
}

    
function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default product;
            
      