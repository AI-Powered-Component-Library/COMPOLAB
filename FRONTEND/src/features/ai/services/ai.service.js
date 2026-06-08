import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1/component",
});

export const generateComponent = async (prompt) => {
  const response = await API.post("/ai", {
    prompt,
  });

  return response.data;
};
