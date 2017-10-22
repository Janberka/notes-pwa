import {combineReducers, applyMiddleware, createStore, compose} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist'
import localForage from 'localforage'
import thunk from 'redux-thunk';
import notes from './notes';

const rootReducer = combineReducers({
    notes,
})

const store = createStore(
    rootReducer,
    undefined,
    compose(
        applyMiddleware(thunk),
        autoRehydrate()
    )
);

persistStore(store, {storage: localForage});

// export default OfflineStore;

export default store;