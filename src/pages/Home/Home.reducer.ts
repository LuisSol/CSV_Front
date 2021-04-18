type Action =
  | {
      type: "SET_SELECTED_FILE";
      filename: string;
      file: File;
    }
  | {
      type: "SET_PROVIDER";
      provider: string;
    }
  | {
      type: "CLEAR_FORM";
    };

type State = {
  file: File | null;
  filename: string;
  provider: string;
};

export const homeDefaultState: State = {
  file: null,
  filename: "",
  provider: "",
};

export const homeReducer = (
  state: State = homeDefaultState,
  action: Action
) => {
  switch (action.type) {
    case "SET_SELECTED_FILE":
      return { ...state, file: action.file, filename: action.filename };
    case "SET_PROVIDER":
      return { ...state, provider: action.provider };
    case "CLEAR_FORM":
      return { ...homeDefaultState };
    default:
      return state;
  }
};
