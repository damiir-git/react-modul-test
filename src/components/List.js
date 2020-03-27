import React from 'react';
import { Table, Row, Item, Header } from '../components/Tables';
import { dateFormat, getYesNo } from '../common.js';

export default class List extends React.Component {
    render() {
        const heads = [
            { id: 'Id', name: 'Ид' },
            { id: 'Name', name: 'Наименование' },
            { id: 'OGRN', name: 'ОГРН' },
            { id: 'Type', name: 'Тип' },
            { id: 'RegistrationDate', name: 'Дата регистрации' },
            { id: 'Active', name: 'Активность' }];
        return <Table>
            <Header key="head" heads={heads} />
            {this.props.companies.map((item) => {
                const {Id, Name, OGRN, Type, RegistrationDate, Active} = item;
                return (
                    <Row key={Id} onClick={(e) => this.props.onRowClick(Id, e)}>
                        <Item>{Id}</Item>
                        <Item>{Name}</Item>
                        <Item>{OGRN}</Item>
                        <Item>{this.props.agentTypes[Type]}</Item>
                        <Item>{dateFormat(RegistrationDate)}</Item>
                        <Item>{getYesNo(Active)}</Item>
                    </Row>
                );
            })}
        </Table>
    }
}