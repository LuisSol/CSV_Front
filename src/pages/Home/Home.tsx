import React, { useReducer } from "react";

// styles
import {
  Container,
  Title,
  UploadBtn,
  UploaderWrapper,
  FileSelector,
  ProviderTextInput,
  FileSelectorLabel,
  IconWrapper,
  InputTextLabel,
} from "./Home.styled";

// utils
import { uploadCSV } from "./Home.utils";
import { homeDefaultState, homeReducer } from "./Home.reducer";

// icons
import { ReactComponent as CSVFileIcon } from "../../assets/csv-file.svg";

const Home = () => {
  const [{ file, filename, provider }, dispatcher] = useReducer(
    homeReducer,
    homeDefaultState
  );

  const handleFileSelection = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;

    if (files && files.length) {
      dispatcher({
        type: "SET_SELECTED_FILE",
        file: files[0],
        filename: files[0].name,
      });
    }
  };

  const handleProvider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatcher({ type: "SET_PROVIDER", provider: value });
  };

  return (
    <Container>
      <Title>CSV Uploader</Title>
      <UploaderWrapper>
        <FileSelectorLabel>
          <p>select a csv file:</p>
          <FileSelector
            id="file-input"
            type="file"
            accept=".csv"
            onChange={handleFileSelection}
          />
          <IconWrapper>
            <CSVFileIcon />
          </IconWrapper>
          <strong>{filename ? filename : ""}</strong>
        </FileSelectorLabel>
        <InputTextLabel htmlFor="provider-text">Provider:</InputTextLabel>
        <ProviderTextInput
          type="text"
          id="provider-text"
          onChange={handleProvider}
          value={provider}
        />

        <UploadBtn onClick={uploadCSV} disabled={!file || !provider}>
          upload file
        </UploadBtn>
      </UploaderWrapper>
    </Container>
  );
};

export default Home;
