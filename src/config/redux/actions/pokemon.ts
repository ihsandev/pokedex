import ActionType from "../types";

export const setPage = () => {
  return {
    type: ActionType.SET_PAGE
  };
};

export const setKeyword = (keyword: string) => {
  return {
    type: ActionType.SET_KEYWORD,
    keyword: keyword
  };
};
