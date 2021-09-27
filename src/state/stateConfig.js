import { createStore, combineReducers } from "redux";

const initialState = {
  access_token: null,
  expires: null,
  refresh_token: null,
  id: null,
  first_name: null,
  last_name: null,
  last_page: null,
  email: null,
  password: null,
  location: null,
  title: null,
  description: null,
  tags: null,
  avatar: null,
  language: null,
  theme: null,
  tfa_secret: null,
  status: null,
  role: null,
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
