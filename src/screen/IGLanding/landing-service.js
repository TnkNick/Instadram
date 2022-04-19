import Axios from "axios";

const Endpoint = {
    GET_HOME_INFO: '/v1/home'
}
export const getHomeInfo = (req) => {
    const { success, failure } = req
    Axios.get(Endpoint.GET_HOME_INFO)
        .then(value => {
            if (value.data.status.code == 1000) {
                success(value.data.data)
            } else {
                failure()
            }
        })
        .catch(_ => {
            failure()
        })
}
