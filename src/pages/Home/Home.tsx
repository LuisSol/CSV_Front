import React from "react";

// styles
import {
  Container,
  Title,
  UploadBtn,
  UploaderWrapper,
  FileSelector,
  ProviderTextInput,
} from "./Home.styled";

// utils
import { uploadCSV } from "./Home.utils";

const Home = () => {
  return (
    <Container>
      <Title>CSV Uploader</Title>
      <UploaderWrapper>
        <FileSelector type="file" />
        <ProviderTextInput type="text" />
        <UploadBtn onClick={uploadCSV}>upload</UploadBtn>
      </UploaderWrapper>
    </Container>
  );
};

export default Home;
