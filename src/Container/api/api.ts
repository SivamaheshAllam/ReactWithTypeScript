import axios, { AxiosResponse } from "axios";
const BASE_URL = 'http://localhost:4444';

//User Registartion
export const userRegistration = async (formData:any) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, formData);
    return response.data;
    console.log(response)
  } catch (error) {
    console.error("Error during signup:", error);
    throw error;
  }
};
 
//User Login
export const userLoginAPI= async (formData:any)=>{
    try {
        const response= await axios.post(`${BASE_URL}/login`, formData)
        return response.data;
    } catch (err) {
        console.log(err)
    }
}

