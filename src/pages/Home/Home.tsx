import React, { useReducer, useRef } from "react";
import { useMutation } from "react-query";

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
import { flasher } from "../../utils/Flasher";

// icons
import { ReactComponent as CSVFileIcon } from "../../assets/csv-file.svg";

// components
import Spinner from "../../components/ui/Spinner";

const Home = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [{ file, filename, provider }, dispatcher] = useReducer(
    homeReducer,
    homeDefaultState
  );
  const { mutate, isLoading } = useMutation(uploadCSV, {
    onError: () => {
      flasher("Something went wrong please try again", "error");
    },
    onSuccess: () => {
      dispatcher({ type: "CLEAR_FORM" });
      if (fileRef.current) {
        fileRef.current.value = "";
      }
      flasher("File successful uploaded", "success");
    },
  });

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

  const uploadFile = () => {
    if (file) {
      mutate({ file, provider });
    }
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
            ref={fileRef}
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
        {isLoading ? (
          <Spinner />
        ) : (
          <UploadBtn onClick={uploadFile} disabled={!file || !provider}>
            upload file
          </UploadBtn>
        )}
      </UploaderWrapper>
    </Container>
  );
};

export default Home;
