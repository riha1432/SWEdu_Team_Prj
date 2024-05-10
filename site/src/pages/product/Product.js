/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import Carousel from '../../components/Carousels';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../../App.css';



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
            <GroupExample />
             </div>

        </div>

);
}

    
function GroupExample() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <CardGroup style={{width: "1200px", objectFit: 'contain'}}>
      <Card >
        <Card.Img variant="top" src="lettuce1.jpg" style={{width: "400px", height: "250px" }} />
        <Card.Body>
          <Card.Title>상추</Card.Title>
          <Card.Text>
            맛있는 상추
            맛있는 상추
            맛있는 상추
            맛있는 상추
            맛있는 상추
            맛있는 상추
            맛있는 상추
            맛있는 상추
            맛있는 상추
            맛있는 상추
            맛있는 상추
            맛있는 상추
            맛있는 상추
            맛있는 상추
            맛있는 상추
            맛있는 상추
            맛있는 상추
            맛있는 상추
            맛있는 상추
            맛있는 상추
            맛있는 상추
            맛있는 상추
            맛있는 상추
            맛있는 상추
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="kale1.jpg" style={{width: "400px", height: "250px"}} />
        <Card.Body>
          <Card.Title>케일</Card.Title>
          <Card.Text>
            맛있는 케일
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="mustardGreens1.jpg" style={{width: "400px", height: "250px"}} />
        <Card.Body>
          <Card.Title>겨자채</Card.Title>
          <Card.Text>
            맛없는 겨자채
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>

    

  );
}

export default product;
            
      