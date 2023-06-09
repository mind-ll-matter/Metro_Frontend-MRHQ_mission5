import axios from "axios";

class ListingService {
  getListing(id) {
    // return axios.get(`http://localhost:5000/listing/${id}`).then(res=> {
    return axios.get(`${process.env.REACT_APP_API_URL}/${id}`).then((res) => {
      console.log("THE VERY FIRST RES", res);
      return res.data;
    });
  }
}

export default new ListingService();
