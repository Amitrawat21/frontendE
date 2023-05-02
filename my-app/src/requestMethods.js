import axios from "axios";

const BASE_URL = "https://vercel.com/amitrawat21/backend-e-a85a/api/";
const TOKEN =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGEyMDJmODc0YTQ0NjEzYmQ1MGU2OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTQxMTQyOCwiZXhwIjoxNjc1NjcwNjI4fQ.5kpK0PSydf7MTm0oUWCFLeJmAZazpfhc_ckLjc_LdrY";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}`},
});