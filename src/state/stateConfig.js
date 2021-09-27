import { createStore, combineReducers } from "redux";

const initialState = {
  access_token: null,
  expires: null,
  refresh_token: null,
};

const reducers = combineReducers({
  user: function (state, action) {
    switch (action.type) {
      case "SET_USER":
        return action.payload;
      default:
        return initialState;
    }
  },
});

function store() {
  return createStore(reducers);
}

export default store;
