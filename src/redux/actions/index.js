export default {
    GET_ALL_PRODUCTS: 'GET_ALL_PRODUCTS'
}

export const onSuccess = (action) => `${action}_SUCCESS`;
export const onFail = (action) => `${action}_FAIL`;
export const onClear = (action) => `${action}_CLEAR`;
