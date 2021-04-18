import axios from "../../utils/api";

interface queryCtx {
  queryKey: [String, string];
}

export const getVehicles = async (ctx: queryCtx) => {
  const { queryKey } = ctx;
  const results = await axios.get(`/provider/${queryKey[1]}`);
  return results.data;
};
