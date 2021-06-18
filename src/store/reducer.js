const initialState = {
  users: [],
  totalUsers: 0,
  userDetails: [],
};

export const reducer = (state = initialState, action) => {
  if (action.type === "SET_USERS") {
    return { ...state, users: action.payload };
  }

  if (action.type === "SET_TOTAL_USERS") {
    return { ...state, totalUsers: action.payload };
  }

  if (action.type === "SET_USER_DETAILS") {
    return {
      ...state,
      userDetails: action.payload,
    };
  }
  return state;
};
