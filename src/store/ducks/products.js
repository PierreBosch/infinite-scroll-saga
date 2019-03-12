export const Types = {
  GET_REQUEST: "products/GET_REQUEST",
  GET_SUCCESS: "products/GET_SUCCESS"
};

const INITIAL_STATE = {
  data: [],
  loading: true,
  offset: 0,
  limit: 50,
  hasMore: true
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true, offset: state.data.length };
    case Types.GET_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        loading: false,
        error: null,
        hasMore: action.payload.data.length ? true : false
      };
    default:
      return state;
  }
}

export const Creators = {
  getProductsRequest: () => ({
    type: Types.GET_REQUEST
  }),

  getProductsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  })
};
