import { createStore } from "redux";
import shoppingReducer from "./redux/shoppingReducer";

const store = createStore(shoppingReducer);
export default store;
