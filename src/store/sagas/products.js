import { call, put, select } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as ProductsActions } from "../ducks/products";
import { Types as ProductsTypes } from "../ducks/products";
import { Creators as ErrorActions } from "../ducks/error";

export function* getProducts() {
  try {
    const pageNumber = yield select(state => state.products.pageNumber);

    const response = yield call(
      api.get,
      `/products?_page=${pageNumber}&_limit=${4}`
    );

    yield put(ProductsActions.getProductsSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError("Não foi possível obter os produtos"));
  }
}
