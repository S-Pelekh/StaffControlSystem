export const setUsers = (data) => ({
  type: "SET_USERS",
  payload: data,
});

export const setTotalUsers = (count) => ({
  type: "SET_TOTAL_USERS",
  payload: count,
});

export const setUserDetails = (data) => ({
  type: "SET_USER_DETAILS",
  payload: data,
});
