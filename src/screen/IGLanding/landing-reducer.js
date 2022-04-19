import { REQUEST, SUCCESS } from '../../redux/general/general-type'
import { LANDING_ACTION_TYPE } from './landing-action'

export const LANDING_STATE_KEY = {
    LOADING: 'LOADING',
    HOMEINFO: 'HOMEINFO',
    STORYINFO: 'STORYINFO',
    FEEDINFO: 'FEEDINFO',
    SUGGESTINFO: 'SUGGESTINFO'
}

const initialState = {
    [LANDING_STATE_KEY.LOADING]: false,
    [LANDING_STATE_KEY.STORYINFO]: [],
    [LANDING_STATE_KEY.FEEDINFO]: [],
    [LANDING_STATE_KEY.SUGGESTINFO]: [],
    [LANDING_STATE_KEY.HOMEINFO]: {}
}

export const landingReducers = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST(LANDING_ACTION_TYPE.SET_STATE):
            return {
                ...state,
                [action.payload.key]: action.payload.value
            }
        default:
            return state
    }
}

export const landingStateSelector = (key) => (state) => state.landingReducers[key]