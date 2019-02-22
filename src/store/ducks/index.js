import { combineReducers } from "redux";
import products from "./products";
import error from "./error";
export default combineReducers({
  products,
  error
});
