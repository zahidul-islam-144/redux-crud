import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import { parsistedData } from "../config/fakeDB.Config";

const store = createStore(rootReducer, parsistedData);

export default store;
