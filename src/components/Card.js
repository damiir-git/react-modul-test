import React from 'react';
import { dateFormat, getYesNo } from '../common.js';

export default class Card extends React.Component {
    render() {
        const {id, name, ogrn, type, registrationDate, active, agentTypes} = this.props;
        return <div>
            <div>Идентификатор: {id}</div>
            <div>Наименование: {name}</div>
            <div>ОГРН: {ogrn}</div>
            <div>Тип: {agentTypes[type]}</div>
            <div>Дата регистрации: {dateFormat(registrationDate)}</div>
            <div>Активность: {getYesNo(active)}</div>
        </div>
    }
}