import axios from "axios";

export default {
  queryApi: (query) => {
    return axios.get("plants/" + query);
  },
  addUser: (user, token) => {
    return axios.post("api/user", user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  addPlant: (plant, token) => {
    return axios.post("/api/add-plant", plant, {
      //needs "partner" in privateRoutes so server gets request
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getWeather: (zip) => {
    return axios.get("/weather/" + zip);
  },
  deletePlant: (plantId, token) => {
    return axios.delete('plant/' + plantId,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }})
  }
  // addPlant: (plant, token) => {
  //   return axios.put("api/add-plant", plant, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
};
