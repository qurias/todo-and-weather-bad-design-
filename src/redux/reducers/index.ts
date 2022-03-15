import { combineReducers } from "redux";

import todo from "./todo"
import color from "./color"

export const rootReducer = combineReducers({
  todo,
  color,
});

export type RootState = ReturnType<typeof rootReducer>