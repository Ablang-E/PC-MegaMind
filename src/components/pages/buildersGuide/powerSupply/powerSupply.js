import React from 'react';
import '../../../../App.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from '../SideBar';

export default function powerSupply() {
  return (
    <>
        
        <div className='pages'>
            <Container className='sidebar_BG'>
                <Row className="sidebar_row" xs sm md lg xl={1}>
                    <Col xs sm md lg xl={{ span: 3, offset: 0}}>
                        <SideBar/>
                    </Col>
                    <Col xs sm md lg xl={{ span: 7, offset: 0}}>
                        <Row xs sm md lg xl={1}>
                            <h1 className="buildersHeader">Power Supply</h1>
                        </Row>
                        <Row  xs sm md lg xl={1}>
                            <p>Description here ...</p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
    );
}
