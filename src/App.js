import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './App.css';

function App() {
  return (
    <Container>
      <Row>
        <Col>
            <h1>AWESOME CHANGE</h1>
            <div className="message">
              React App has been changed by Cameron Weijmer
            </div>
        </Col>
        <Row>
          <Col>
            <div className="loop-wrapper">
              <div className="mountain"></div>
              <div className="hill"></div>
              <div className="tree"></div>
              <div className="tree"></div>
              <div className="tree"></div>
              <div className="rock"></div>
              <div className="truck"></div>
              <div className="wheels"></div>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default App;
