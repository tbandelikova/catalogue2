import { configureStore } from "redux";
import reducer from "./reducer";

let store = configureStore(reducer);

export default store;