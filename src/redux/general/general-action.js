import { REQUEST } from "./general-type"

export const GENERAL_ACTION_TYPE = {
    SET_STATE: 'GENERAL_ACTION_TYPE/SET_STATE'
}

export const generalAction = {
    setGeneralState: (key, value) => {
        return {
            type: REQUEST(GENERAL_ACTION_TYPE.SET_STATE),
            payload: {key, value}
        }
    }
}