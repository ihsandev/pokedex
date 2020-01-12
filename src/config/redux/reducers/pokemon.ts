import ActionType from "../types";

const initialState = {
  page: 20,
  keyword: ""
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionType.SET_PAGE:
      return {
        ...state,
        page: state.page + 20
      };
    case ActionType.SET_KEYWORD:
      return {
        ...state,
        keyword: action.keyword
      };
    default:
      return state;
  }
};

export default reducer;
