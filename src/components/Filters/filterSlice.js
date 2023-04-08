const initState = {
  search: "",
  priority: [],
  status: "All",
};

export function filterReducer(state = initState, action) {
  switch (action.type) {
    case "filters/filterSearch":
      return {
        ...state,
        search: action.payload,
      };
    case "filters/filterStatus":
      return {
        ...state,
        status: action.payload,
      };
    case "filters/filterPriority":
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return state;
  }
}
