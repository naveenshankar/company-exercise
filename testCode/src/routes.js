import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute , browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store';
import {saveState,deleteState} from './store';

import { CompanyHome } from '../src/containers/CompanyHome';
import { PeopleHome } from '../src/containers/PeopleHome';
import { NoMatch } from '../src/containers/NoMatch';
import {Root} from '../src/containers/Root';
import { Welcome } from '../src/containers/Welcome';

const app = document.getElementById('app');
const react_router_redux_history = syncHistoryWithStore(browserHistory, store);

store.subscribe(() => {
  // persist your state
  if(!store.getState().companies.deleteCache){
    saveState(store.getState());
  }
  else{
    deleteState(store.getState());
  }
});

export default class SigFigCompany extends React.Component {
    render() {
        return (
        <Router history={react_router_redux_history}>
				<Route path="/" component={Root}>
            <IndexRoute component={Welcome} />
            <Route path="companies" component={CompanyHome} />
            <Route path="companies/:companyid" component={CompanyHome} />
            <Route path="companies/:companyid/people" component={PeopleHome} />
            <Route path="companies/:companyid/people/:peopleid" component={PeopleHome} />
            <Route path="*" component={NoMatch} />
				</Route>
		  	</Router>
        );
    }
}

render(<Provider store={store}><SigFigCompany/></Provider>, app);