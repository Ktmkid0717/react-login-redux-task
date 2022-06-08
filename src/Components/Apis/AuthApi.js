import axios from "axios";
// const API_BASE_URL = "https://api.quikdr.com";
// const userLoginUrl = "/authentication";
export const apiInstance = axios.create({
  baseUrl: "https://api.quikdr.com",
  headers: {
    "Content-Type": "application/json",
    // "api-header-security":
    //   "C1kxIHN1D81zT7DXFQINoiQKDRXIMLCWTugbg9CorYg5SIxHsBBLNvNbebCxoC1qWhtx",
  },
});
// const UserLogin = async (config) => {
//   let response = null;
//   let error = null;
//   try {
//     const ApiResponse = await apiInstance.post(userLoginUrl, config);
//     response = ApiResponse.data;
//   } catch (e) {
//     error = e.message;
//     console.log("error in login", error);
//   }
//   return { error, response };
// };
// export const AuthApi = {
//   UserLogin,
// };
