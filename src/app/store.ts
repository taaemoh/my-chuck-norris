import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import jokes from '../components/pages/jokes/redux/jokesPageReducer';
import { saveToLocalStorage, loadFromLocalStorage } from './presistanceService';

const persistedState = loadFromLocalStorage();

export const rootReducer = combineReducers({
  jokes,
});

export type StoreDataType = ReturnType<typeof rootReducer>;

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const store = createStore(rootReducer,  persistedState, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;