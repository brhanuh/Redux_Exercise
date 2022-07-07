import { addReducer } from "./add";
import { combineReducers } from "redux";

const allReducers = combineReducers({ addReducer });

export default allReducers;
