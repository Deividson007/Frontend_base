import axios from "axios";

export default () => axios.create({
    baseURL: "localhost:8080/projeto/server/api"
});