import { takeLatest, put } from "redux-saga/effects";
import actions, { onFail, onSuccess } from "../actions";

function* getAllProductSaga() {
  try {
    const result = yield fetch(
      "http://192.168.11.119:3000/api/product/getAllProducts",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Dong 15 ProductSaga", result);
    if (result?.success) {
      console.log("Dong 17 ProductSaga", result);
      yield put({ type: onSuccess(actions.GET_ALL_PRODUCTS), payload: result });
    } else throw result;
  } catch (e) {
    console.log("Dong 25 ProductSaga", e);
    yield put({ type: onFail(actions.GET_ALL_PRODUCTS) });
  }
}

export default function* watchProductSaga() {
  yield takeLatest(actions.GET_ALL_PRODUCTS, getAllProductSaga);
}
