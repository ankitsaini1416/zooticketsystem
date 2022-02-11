import todoReducers from "./todoReducers";
import changeTheNumber from "./upDown";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducers,
  changeTheNumber,
});

export default rootReducer;
