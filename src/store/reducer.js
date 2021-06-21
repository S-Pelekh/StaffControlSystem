import { SET_USERS, SET_USER_DETAILS, initialState } from "./actions";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };
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
