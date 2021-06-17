export const setTotalWorkers = (count) => {
  return { type: "SET_TOTAL_WORKERS", payload: count };
};

export const setWorkerDetails = (id, details) => {
  return { type: "SET_WORKER_DETAILS", payload: { id, details } };
};
