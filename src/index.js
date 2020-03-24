import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {dateFormat, getYesNo} from './common.js';
import {getCompanies, getAgentTypes} from './api';
import {Table, Row, Item, Header} from './tables';

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: [],
      agentTypes: []
    };

    getCompanies().then((response) => {
      this.state = {...this.state, ...{companies: response}};
    })

    getAgentTypes().then((response) => {
      this.state = {...this.state, ...{agentTypes: response}};
    })
    
  }
  render() {
    const heads = [
      {id: 'Id', name: 'Ид'},
      {id: 'Name', name: 'Наименование'},
      {id: 'OGRN', name: 'ОГРН'},
      {id: 'Type', name: 'Тип'},
      {id: 'RegistrationDate', name: 'Дата регистрации'},
      {id: 'Active', name: 'Активность'}];
    return (
      <Table>
        <Header key="head" heads={heads} />
        {this.state.companies.map((item) => {
          return (
            <Row key={item.Id}>
              <Item>{item.Id}</Item>
              <Item>{item.Name}</Item>
              <Item>{item.OGRN}</Item>
              <Item>{this.state.AgentTypes[item.Type]}</Item>
              <Item>{dateFormat(item.RegistrationDate)}</Item>
              <Item>{getYesNo(item.Active)}</Item>
            </Row>
          );
        })}
      </Table>
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

npm start

start json-server
json-server --watch ./src/data/db.json --port 3004
*/