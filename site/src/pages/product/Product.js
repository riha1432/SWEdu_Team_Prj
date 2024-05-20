/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import Carousel from '../../components/Carousels';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../../App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function product(props) {

    let [fade2, setFade2] = useState('')
  
    useEffect(()=>{
      setFade2('end')
      return ()=>{
        setFade2('')
      }
    },[])


    return(
           <div>
            <Carousel />
            <div className={'start ' + fade2}>
              <h1 className='font'>Ai농가집성마켓에는<br/>
              다양한 엽채류들🥗과<br/>
              Ai성장 기반 농산물들🥬이 있어요!
              </h1>
              <div className='jum'>

              </div>
           
             </div>

             <Row xs={1} md={2} className="g-4">
      {
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>ddd</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      }
    </Row>
        </div>
);
}

export default product;
            
      