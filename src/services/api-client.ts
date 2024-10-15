import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'cd5e833b0fb6405aa3dc0b674222c847'
    }
})