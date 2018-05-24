import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../actions/cartActions";

import Panel from "muicss/lib/react/panel";

class Cart extends Component {
  render() {
    const cartList = this.props.cart.map((item, index) => {
      return (
        <div key={index}>
          <p>
            <span> &#10003;</span> {item.name} qty: {++index}
          </p>

          <button
            className="mui-btn mui-btn--danger"
            onClick={() => this.props.removeFromCart(item)}
          >
            Remove
          </button>
          <span>Total: £{item.price * index}</span>
          <hr />
        </div>
      );
    });

    if (cartList == '') {
      return null;
    }

    return (

      <Panel>
        <div className="cart">{cartList}</div>
      </Panel>

    );
  }
}

const mapStateToProps = (state, props) => ({
  cart: state.cart
});

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: item => dispatch(removeFromCart(item))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
