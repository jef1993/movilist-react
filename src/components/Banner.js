import React from "react";

import { Jumbotron } from "reactstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Banner(props) {
  return (
    <Jumbotron className="jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={12}>
            {props.title && (
              <h1 className="display-1 font-weight-bolder">{props.title}</h1>
            )}
            {props.subTitle && (
              <h2 className="display-4 font-weight-light">{props.subTitle}</h2>
            )}
            {props.text && (
              <h3 classNAme="lead font-weight-light">{props.text}</h3>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export const Banner2 = () => {

    return(<div className='banner'>banner</div>)
};

export default Banner;