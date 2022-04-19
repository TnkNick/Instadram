import { REQUEST } from "./general-type"
import { GENERAL_ACTION_TYPE } from "./general-action"

export const GENERAL_STATE_KEY = {
    LANGUAGE: 'LANGUAGE'
}

const initialState = {
    [GENERAL_STATE_KEY.LANGUAGE]: 'en'
}

export const generalReducers = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST(GENERAL_ACTION_TYPE.SET_STATE):
            return {
                ...state,
                [action.payload.key]: action.payload.value
            }
        default:
            return state
    }
}

export const generalStateSelector = (key) => {
    return (state) => {
        return state.generalReducers[key]
    }
}