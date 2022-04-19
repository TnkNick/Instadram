import Axios from "axios";
import { GENERAL_STATE_KEY } from "../redux/general/general-reducer";

const second = (second) => {
    return second * 1000
}

export default store => {
    const state = store.getState();
    Axios.defaults.baseURL = 'http://localhost:10004'
    Axios.defaults.timeout = second(12);
    Axios.defaults.headers.common['Accept-Language'] = state.generalReducers[GENERAL_STATE_KEY.LANGUAGE]
    // store.subscribe(() => {
    //     const state = store.getState();
    //     Axios.defaults.headers.common['Accept-Language'] = state.generalReducers[GENERAL_STATE_KEY.LANGUAGE]
    // });
}
