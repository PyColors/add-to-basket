import { combineReducers } from "redux";
import cart from "./cartReducer";
import products from "./productsReducer";
import * as constantsActions from "../utils/constants_actions";

const appReducers = combineReducers({
  cart,
  products,
});

const reducers = (state, action) => {
  if (action.type === constantsActions.CLEAR_STORE) {
    state = undefined;
  }

  return appReducers(state, action);
};

export default reducers;
