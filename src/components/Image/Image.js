import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaEye, FaCommentDots, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

class Image extends Component {

  render() {
    const footer = (
      <Row>
        <Col md={8}>
        <Row>
          <Col md={3}>
            <FaEye />
          </Col>
          <Col md={3}>
            <FaCommentDots />
          </Col>
          <Col md={3}>
            <FaThumbsUp />
          </Col>
          <Col md={3}>
            <FaThumbsDown />
          </Col>
        </Row>
      </Col>
      </Row>
    );

    return (
      <Card>
        {this.props.title}
        {footer}
      </Card>
      
    )
  }
}

export default Image;
