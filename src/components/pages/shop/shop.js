import React from 'react';
import '../../../App.css';
import Cards from '../../../cards';
import SideBar from '../shop/shopSideBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Cart from './cart';


export default function shop() {
return (
  <>
    <div className='pages'>
  <Container className='sidebar_BG'>
    <Row className="sidebar_row" xs sm md lg xl={1}>
      <Col xs sm md lg xl={{ span: 3, offset: 0}}>
        <SideBar/>
      </Col>
      <Col xs sm md lg xl={{ span: 9, offset: 0}}>
        <h1 >Select Your Parts Here</h1>
        <Row className="sidebar_row" xs sm md lg xl={1}>
          <Link to="/cpu_buildersGuide">
                <button className='filterButton'>
                  <span>Filter</span>
                </button>
          </Link>

          <Link to="/cpu_buildersGuide">
                <span ><Cart/></span>
          </Link>
        </Row>

        <Row className="sidebar_row" xs sm md lg xl={1}>
          
          <Cards />
        </Row>
        
      </Col>
    </Row>
  </Container>
  </div>
    
  </>
);
}
