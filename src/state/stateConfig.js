import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    user: function(state, action) {
        return {
            id: 1,
            name: 'Lucas Moreira',
            email: 'moreirapontocom@gmail.com'
        }
    }
});

function store() {
    return createStore(reducers);
}

export default store;