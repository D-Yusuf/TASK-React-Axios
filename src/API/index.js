import axios from "axios"
const server = axios.create({
    baseURL: "https://pets-react-query-backend.eapi.joincoded.com",
})
export default server