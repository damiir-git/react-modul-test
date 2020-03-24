import axios from 'axios';

const ax = axios.create({
    baseURL: 'http://localhost:3004/'
})

export function getCompanies(id) {
    return ax.get('companies', { params: id });
}

export function getAgentTypes(id) {
    return ax.get('agentTypes', { params: id });
}