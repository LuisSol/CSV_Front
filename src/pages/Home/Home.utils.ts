import axios from "../../utils/api";

export const uploadCSV = async () => {
  const result = await axios.post("/upload-cvs");
  return result.data;
};
