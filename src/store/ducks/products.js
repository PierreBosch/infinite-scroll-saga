export const Types = {
  GET_REQUEST: "products/GET_REQUEST",
  GET_SUCCESS: "products/GET_SUCCESS"
};

const INITIAL_STATE = {
  data: [],
  loading: true,
  pageNumber: 1,
  hasMore: true
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        loading: false,
        error: null,
        hasMore: action.payload.data.length ? true : false,
        pageNumber: state.pageNumber + 1
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

  // setHasMore: status => ({
  //   type: Types.SET_HAS_MORE,
  //   payload: status
  // })
};
