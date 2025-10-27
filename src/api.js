import axios from "axios";

// const BACKEND_URL = "https://creditcard-parser-backend.onrender.com"; 
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


export const parseCard = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await axios.post(`${BACKEND_URL}/upload/`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
};
