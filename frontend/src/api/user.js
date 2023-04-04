import axios from "./axios";

const getUserdata = (successCB) => {
  return axios.get(`/users`).then((res) => {
    successCB(res.data);
    return res.data;
  });
};
const addDetails = (data, successCB, errorCB) => {
  return axios.post("/users", data).then(
    (res) => {
      successCB(res.data);
      return res;
    },
    (error) => {
      errorCB(error.response?.data.message);
      return error.res;
    }
  );
};
export { getUserdata, addDetails };
