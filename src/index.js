import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { dateFormat, getYesNo } from './common.js';
import { Table, Row, Item, Header } from './components/tables';

import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';


import { reducer } from './store/reducers';
import { loadData } from './store/actions';
import rootSaga from './store/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware))

sagaMiddleware.run(rootSaga);

class App extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const heads = [
      { id: 'Id', name: 'Ид' },
      { id: 'Name', name: 'Наименование' },
      { id: 'OGRN', name: 'ОГРН' },
      { id: 'Type', name: 'Тип' },
      { id: 'RegistrationDate', name: 'Дата регистрации' },
      { id: 'Active', name: 'Активность' }];

    if (this.props.loading) {
      return <div>Загрузка...</div>
    }
    if (this.props.error) {
      return <div className="Error">{this.props.error.message}</div>
    }
    return <Table>
      <Header key="head" heads={heads} />
      {this.props.companies.map((item) => {
        return (
          <Row key={item.Id}>
            <Item>{item.Id}</Item>
            <Item>{item.Name}</Item>
            <Item>{item.OGRN}</Item>
            <Item>{this.props.agentTypes[item.Type]}</Item>
            <Item>{dateFormat(item.RegistrationDate)}</Item>
            <Item>{getYesNo(item.Active)}</Item>
          </Row>
        );
      })}
    </Table>
  }
}

const mapDispatchToProps = { loadData };

const ConnectedApp = connect((state) => {
  return state;
}, mapDispatchToProps)(App)

// ========================================

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);