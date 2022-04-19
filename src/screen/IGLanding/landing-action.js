import { REQUEST } from '../../redux/general/general-type'

export const LANDING_ACTION_TYPE = {
    SET_STATE: 'LANDING_ACTION_TYPE/SET_STATE',
}

export const landingAction = {
    setLandingState: (key, value) => {
        return {
            type: REQUEST(LANDING_ACTION_TYPE.SET_STATE),
            payload: { key, value }
        }
    }
}