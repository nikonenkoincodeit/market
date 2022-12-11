import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com/";

export async function getData(path) {
  try {
    const response = await axios.get(path);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
