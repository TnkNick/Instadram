import { combineReducers } from 'redux'
import { generalReducers } from './general/general-reducer'
import { landingReducers } from '../screen/IGLanding/landing-reducer'

export const rootReducers = combineReducers({
    generalReducers,
    landingReducers
})