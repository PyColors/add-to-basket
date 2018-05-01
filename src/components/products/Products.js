import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../actions/cartActions";

import Img from "../../components/ui/img/Img";

import Panel from "muicss/lib/react/panel";
import Col from "muicss/lib/react/col";

class Products extends Component {
  render() {
    const productList = this.props.products.map((item, index) => {
      return (
        <Col md="6" key={index}>
          <Panel>
            <Img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <span>£{item.price}</span>
            <button
              className="mui-btn mui-btn--primary"
              onClick={() => this.props.addToCart(item)}
            >
              Add To Cart
            </button>
          </Panel>
        </Col>
      );
    });

    return <article className="products">{productList}</article>;
  }
}

function mapStateToProps(state, props) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => dispatch(addToCart(item))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
