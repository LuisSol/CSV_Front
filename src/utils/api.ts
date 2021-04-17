import axios from "axios";

const { REACT_APP_API } = process.env;

const baseURL = REACT_APP_API || "http://localhost:5000";

const axiosIntance = axios.create({ baseURL });

export default axiosIntance;
