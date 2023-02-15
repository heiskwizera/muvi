import { API_KEY } from "@env";
import { create } from "apisauce";

const api1 = "https://dead-blue-nightingale-kit.cyclic.app/api/user";
const api2 = "https://blogapi-0jru.onrender.com/api";

const movieDbClient = create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
  },
  headers: {
    Accept: "application/json",
  },
});


const clientApi = create({
  baseURL:api2,
  headers:{
    Accept:"application/json",
    "Content-Type":"application/json",
  },
  timeout:20000,
})




export default movieDbClient;
export {clientApi}
