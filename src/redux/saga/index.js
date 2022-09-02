import {all, fork} from 'redux-saga/effects'
import watchProductSaga from './ProductSaga'
export default function * rootSaga(){
    yield all([
        fork(watchProductSaga)
    ])
}