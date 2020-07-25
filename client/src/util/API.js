import axios from "axios";

export default {
  queryApi: (query) => {
    return axios.get("plants/" + query);
  },
};
