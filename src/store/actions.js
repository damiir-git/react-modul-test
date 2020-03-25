export const REQUEST_DATA = 'REQUEST_DATA';
export const REQUEST_DATA_ERROR = 'REQUEST_DATA_ERROR';
export const LOAD_DATA = 'LOAD_DATA';
export const PUT_DATA = 'PUT_DATA';
export const PUT_AGENT_TYPES_DATA = 'PUT_AGENT_TYPES_DATA';

export const requestData = () => {
    return {
        type: REQUEST_DATA
    }
}

export const requestDataError = (error) => {
    return {
        type: REQUEST_DATA_ERROR,
        payload: error
    }
}

export const loadData = () => {
    return {
        type: LOAD_DATA
    }
}

export const putData = (dataFromServer) => {
    return {
        type: PUT_DATA,
        payload: dataFromServer
    };
}

export const putAgentTypes = (dataFromServer) => {
    return {
        type: PUT_AGENT_TYPES_DATA,
        payload: dataFromServer
    };
}