import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const Title = styled.h1``;

export const UploaderWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FileSelector = styled.input`
  display: none;
`;

export const InputTextLabel = styled.label`
  display: block;
  align-self: flex-start;
  margin: 20px 0 10px 5px;
`;

export const ProviderTextInput = styled.input`
  border: 0;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.black};
  width: 300px;
  margin-bottom: 20px;
  height: 20px;
  padding-bottom: 5px;
  font-size: 19px;
  &:focus {
    outline: none;
  }
`;

export const UploadBtn = styled.button`
  background-color: ${({ theme: { colors } }) => colors.aquaBlue};
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.white};
  display: block;
  margin-top: 20px;
  width: 315px;
  border: 0;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;

  opacity: ${({ disabled }) => (disabled ? ".5" : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "all")};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.darkAquaBlue};
  }
`;

export const FileSelectorLabel = styled.label`
  display: block;
  margin-bottom: 20px;
  cursor: pointer;
  text-align: center;

  strong {
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  }
`;

export const IconWrapper = styled.div`
  svg {
    width: 50px;
  }
`;
