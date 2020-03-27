export const LOAD_ONE = 'LOAD_ONE';
export const PUT_DATA_ONE = 'PUT_DATA_ONE';
export const SAVE_ONE = 'SAVE_ONE';

export const loadOne = (id) => {
    return {
        type: LOAD_ONE,
        payload: id
    }
}

export const putDataOne = (dataFromServer) => {
    return {
        type: PUT_DATA_ONE,
        payload: dataFromServer
    }
}

export const saveOne = (record) => {
    return {
        type: SAVE_ONE,
        payload: record
    }
}