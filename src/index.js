import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import CardContainer from './components/CardContainer';
import ListContainer from './components/ListContainer';
import FormContainter from './components/FormContainter';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import rootReducer from './store/reducers'
import rootSaga from './store/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware))

sagaMiddleware.run(rootSaga);

class App extends React.Component {
  handleClick(id, history) {
    history.push(`/companies/${id}`);
  }

  navigation(id) {
    return (
      <div>
        <Link to='/'>К списку</Link>&nbsp;
        <Link to={`/companies/edit/${id}`}>Редактировать</Link>&nbsp;
        <Link to={`/companies/${id}`}>К карточке</Link>
      </div>
    )
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={(props) => (
          <ListContainer onRowClick={(id) => this.handleClick(id, props.history)} />
        )} />
        <Route exact path='/companies/:number' render={(props) => (
          <div>
            {this.navigation(props.match.params.number)}
            <CardContainer id={props.match.params.number} />
          </div>
        )} />
        <Route exact path='/companies/edit/:number' render={(props) => (
          <div>
            {this.navigation(props.match.params.number)}
            <FormContainter id={props.match.params.number} onSave={(id) => this.handleClick(id, props.history)}/>
          </div>
        )} />
      </Switch>
    )
  }
}

// ========================================

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);