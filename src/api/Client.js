import { API_KEY } from "@env";
import { create } from "apisauce";

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
  baseURL:"https://dead-blue-nightingale-kit.cyclic.app/api/user",
  headers:{
    Accept:"application/json",
  }
})




export default movieDbClient;
export {clientApi}
