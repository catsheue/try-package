import { combineReducers } from "redux";

import accountReducer from "./account/reducer";

export const reducers = combineReducers({
  account: accountReducer,
});

export default reducers;
