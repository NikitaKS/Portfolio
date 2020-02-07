import {combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form";

let rootReducer = combineReducers({
    form: formReducer
});
const store = createStore(rootReducer);
export default store;
window.store = store;