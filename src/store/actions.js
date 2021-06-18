export const setUsers = (data) => {
  return { type: "SET_USERS", payload: data };
};

export const setTotalUsers = (count) => {
  return { type: "SET_TOTAL_USERS", payload: count };
};

export const setUserDetails = (data) => {
  return { type: "SET_USER_DETAILS", payload: [data] };
};
