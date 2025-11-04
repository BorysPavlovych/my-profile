import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
  return (
    <Jumbotron style={{ backgroundColor: '#b1b1b1ff' }}>
      <Row className="align-items-center">
        {/* LEFT SIDE IMAGE */}
        <Col xs={12} md={4} className="text-center">
          <Image 
            src="city/myimage.png" 
            alt="Profile" 
            roundedCircle 
            fluid 
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          />
        </Col>

        {/* RIGHT SIDE TEXT */}
        <Col xs={12} md={8}>
          <header>
            <h1><strong>BORYS PAVLOVYCH</strong></h1>
            <p>
              <strong>Gender:</strong> Male<br />
              <strong>Date of Birth:</strong> April 18, 1996<br />
              <strong>Email:</strong> beastmaster0418@gmail.com<br />
              <strong>Address:</strong> Apartment 27, 123A Shevchenko Street, Lviv, Lviv Oblast, 79008, Ukraine<br />
            </p>
          </header>
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default Header;
