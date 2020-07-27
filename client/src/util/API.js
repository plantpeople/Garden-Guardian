import axios from "axios";

export default {
  queryApi: (query) => {
    return axios.get("plants/" + query);
  },
  testPrivate: (token) => {
    if (!token) {
      alert("nope");
      return;
    }
    return axios.get("testprivate", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  testPublic: () => {
    return axios.get("testpublic");
  },
};
