import {combineReducers, applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import notes from './notes';

const rootReducer = combineReducers({
    notes,
})

const store = createStore(
    rootReducer,
    {},
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;