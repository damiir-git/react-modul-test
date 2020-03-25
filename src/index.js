import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { dateFormat, getYesNo } from './common.js';
import { Table, Row, Item, Header } from './components/tables';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider, useDispatch } from 'react-redux';
import { reducer } from './store/reducers';
import { loadData } from './store/actions';
import { watchLoadData } from './store/sagas';

import { logger } from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware))

export const Connected = ({ companies, agentTypes }) => {
  const dispatch = useDispatch();
  dispatch(loadData());

  // console.log('wie viele mal hat geruft?');

  const heads = [
    { id: 'Id', name: 'Ид' },
    { id: 'Name', name: 'Наименование' },
    { id: 'OGRN', name: 'ОГРН' },
    { id: 'Type', name: 'Тип' },
    { id: 'RegistrationDate', name: 'Дата регистрации' },
    { id: 'Active', name: 'Активность' }];

  const renderTable = () => {
    if (companies) {
      return <Table>
        <Header key="head" heads={heads} />
        {companies.map((item) => {
          return (
            <Row key={item.Id}>
              <Item>{item.Id}</Item>
              <Item>{item.Name}</Item>
              <Item>{item.OGRN}</Item>
              <Item>{agentTypes[item.Type]}</Item>
              <Item>{dateFormat(item.RegistrationDate)}</Item>
              <Item>{getYesNo(item.Active)}</Item>
            </Row>
          );
        })}
      </Table>
    }
    return <div>Загрузка...</div>
  }

  return (
    <button>тест</button>
    {renderTable()}
  )
}


class List extends React.Component {
  constructor(props) {
    super(props);
    sagaMiddleware.run(watchLoadData);
  }

  componentDidMount() {
    console.log('componentDidMount');
    // const dispatch = useDispatch();
    // dispatch(loadData());
  };

  render() {
    return (
      <Provider store={store}>
        <Connected companies={this.state ? this.state.companies : null} agentTypes={this.state ? this.state.agentTypes : null} />
      </Provider>
    )
  }
}

// ========================================

ReactDOM.render(
  <List />,
  document.getElementById('root')
);


/*
npm install
npm install -g json-server

npm start
json-server --watch ./src/data/db.json --port 3004
*/