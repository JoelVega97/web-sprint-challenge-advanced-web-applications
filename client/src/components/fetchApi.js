import { axiosWithAuth } from "../utils/axiosWithAuth";

export const fetchApi = () => {
  axiosWithAuth()
    .get("http://localhost:5000/api/colors")
    .then((res) => {
      console.log(res);
      return res;
    });
};
