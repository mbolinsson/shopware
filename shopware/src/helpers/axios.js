import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3300/api",
  headers: {
    "Content-Type": "application/json"
    // Authentication: "bearer " + sessionStorage.getItem("token")
  }
});
