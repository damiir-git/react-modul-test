import axios from 'axios';

const ax = axios.create({
    baseURL: 'http://localhost:3004/'
})

export function getCompanies(id) {
    return ax.get(`companies${id ? `/${id}` : ''}`).then((response) => {
        return response.data;
    });
}

export function getAgentTypes(id) {
    return ax.get(`agentTypes${id ? `/${id}` : ''}`).then((response) => {
        return response.data;
    });
}