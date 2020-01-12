import { combineReducers } from "redux";
import pokemon from "./pokemon";

export interface Props {
  pokemon: any;
}
const rootReducers = combineReducers<Props>({
  pokemon
});

export default rootReducers;
