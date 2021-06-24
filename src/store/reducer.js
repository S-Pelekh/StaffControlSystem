import {
  SET_USERS,
  SET_USER_DETAILS,
  ON_SEARCH,
  SET_STATUS_SORT,
  initialState,
} from "./actions";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };
    case ON_SEARCH:
      return { ...state, keyWords: action.payload };
    case SET_STATUS_SORT:
      return { ...state, statusSort: action.payload };
    case SET_USER_DETAILS:
      const { id, details } = action.payload;
      return {
        ...state,
        userDetails: { ...state.userDetails, [id]: details },
      };
    default:
      return state;
  }
};
