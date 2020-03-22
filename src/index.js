import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {dateFormat, getYesNo} from './common.js';
import data from './data/companies.json';
import AgentTypes from './data/agentTypes.json';

class Table extends React.Component {
  render() {
    return <div className="Table">{this.props.children}</div>
  }
}

class Row extends React.Component {
  render() {
    return <div className="Row">{this.props.children}</div>
  }
}

class Head extends React.Component {
  render() {
    return <div className="Head">{this.props.children}</div>
  }
}

class Item extends React.Component {
  render() {
    return <div className="Item">{this.props.children}</div>
  }
}

class Header extends React.Component {
  render() {
    return (
      <Head>
        {this.props.heads.map((item) => {
          return (
            <Item key={item.id}>{item.name}</Item>
          );
        })}
      </Head>
    )
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
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
        {this.state.data.map((item) => {
          return (
            <Row key={item.Id}>
              <Item>{item.Id}</Item>
              <Item>{item.Name}</Item>
              <Item>{item.OGRN}</Item>
              <Item>{AgentTypes[item.Type]}</Item>
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
