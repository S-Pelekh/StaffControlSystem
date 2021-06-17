const initialState = {
  workers: {},
  totalWorkers: 0,
  workerDetailS: {},
};

export const reducer = (state = initialState, action) => {
  if (action.type === "SET_TOTAL_WORKERS") {
    return { ...state, totalwORKERS: action.payload };
  }

  if (action.type === "SET_WORKER_DETAILS") {
    const { id, details } = action.payload;
    return {
      ...state,
      workerDetails: { ...state.workerDetails, [id]: details },
    };
  }
};
