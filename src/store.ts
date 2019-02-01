import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Phone from './reducers/Phone';

const rootReducer =  combineReducers({
	Phone
});

const createStoreWithMiddleware = applyMiddleware(
	thunkMiddleware,
)(createStore);

function configureStore (initialState?: any) {
	return createStoreWithMiddleware(rootReducer, initialState);
}

export default configureStore();
