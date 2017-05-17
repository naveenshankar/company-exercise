import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {routerReducer } from 'react-router-redux';
import promiseMiddleware from 'redux-promise-middleware';

import companies from './reducers/CompaniesReducer';
import people from './reducers/PeopleReducer';

var storeConfig;

//PERSISTING REDUX STATES WITH LOCAL STORAGE
export const loadState = () => {
	try{
		if(localStorage.getItem('SigFigAppState') == null){
			let initialState = undefined;
			return initialState;
		}
		return JSON.parse(localStorage.getItem('SigFigAppState'));
	}
	catch(err){
		return undefined;
	}
};

export const saveState = (state) => {
	try{
		const serializedState = JSON.stringify(state);
		localStorage.setItem('SigFigAppState',serializedState);
	}
	catch(err){
		//ignore
	}
};

export const deleteState = (state) => {
	try{
		localStorage.removeItem('SigFigAppState');
	}
	catch(err){
		//ignore
	}
};

storeConfig = createStore(
		    combineReducers({
		    	companies,
		        people,
		        routing:routerReducer
		    }),
		    loadState(),
		    applyMiddleware(/*logger,*/promiseMiddleware())
		);

export default storeConfig;

