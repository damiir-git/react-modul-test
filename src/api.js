import axios from 'axios';

const API_BASE_URL = 'http://localhost:3004/';

const ax = axios.create({
    baseURL: API_BASE_URL
})

export function getCompanies(id) {
    return ax.get('companies').then((response) => {
        return response.data;
    });
}

export function getCompaniesById(id) {
    return ax.get('companies', {params: {Id: id}}).then((response) => {
        return response.data.length ? response.data[0] : null;
    });
}

export function getAgentTypes() {
    return ax.get('agentTypes').then((response) => {
        return response.data;
    });
}

export function setCompanies(values) {
    /* вот тут должно быть сохранение в БД */
    return values;
}