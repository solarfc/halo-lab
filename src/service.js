import * as axios from "axios";

export const getProductsList = () => {
    return axios.get('https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e')
        .then(res => res)
        .catch(error => error);
};