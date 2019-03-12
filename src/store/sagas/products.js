import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as ProductsActions } from "../ducks/products";
import { Creators as ErrorActions } from "../ducks/error";

export function* getProducts() {
  try {
    // const { offset, limit } = yield select(state => state.products);

    const response = yield call(api.get, `products`);
    // const response = yield call(api.get, `products/${offset}/${limit}`);

    console.log(response);

    yield put(ProductsActions.getProductsSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError("Não foi possível obter os produtos"));
  }
}
