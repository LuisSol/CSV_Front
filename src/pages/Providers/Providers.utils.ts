import axios from "../../utils/api";

export const getProviders = async () => {
  const results = await axios.get("/providers");
  return results.data;
};
