import { createStore, combineReducers } from 'redux';

const initialState = {
    id: 1,
    name: 'Lucas Moreira',
    email: 'moreirapontocom@gmail.com'
}

const reducers = combineReducers({
    user: function(state, action) {
        return initialState;
    }
});

function store() {
    return createStore(reducers);
}

export default store;