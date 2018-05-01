import React, { Component } from "react";
import Container from "muicss/lib/react/container";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";

import Cart from "../../components/cart/Cart";
import Products from "../../components/products/Products";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Container className="mui--text-subhead">
          <Row>
            <Col md="12">
              <h1>Add to Basket</h1>
            </Col>
            <Col md="12">
              <Row>
                <Col md="9">
                  <h2>Products</h2>
                  <Row>
                    <Products />
                  </Row>
                </Col>

                <Col md="3">
                  <h2>Basket</h2>
                  <Cart />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;
