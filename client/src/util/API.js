import axios from "axios";

export default {
  queryApi: (query) => {
    return axios.get("plants/" + query);
  },
  testAuthApi: (token) => {
    return axios.get("test", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
