import axios from "../../utils/api";

interface UploadMutation {
  file: File;
  provider: string;
}

export const uploadCSV = async ({ file, provider }: UploadMutation) => {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("provider", provider);

  const result = await axios.post("/upload-cvs", formData);
  return result.data;
};
