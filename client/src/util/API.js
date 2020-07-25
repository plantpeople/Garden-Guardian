import axios from "axios";

export default {
  queryApi: () => {
    return axios.get("plants");
  },
};
