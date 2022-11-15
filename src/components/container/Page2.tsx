import {
  AlertType,
  MessageBoxType,
  useMessageBox,
  useModal,
  useSnackbar,
} from "@banpudev/react-components";
import { Button } from "@mui/material";
import { useAuth } from "../../lib/config";

export const Page2 = () => {
  const { userProfile, username, login, logout } = useAuth();
  const { displayModal } = useModal();
  const { displayMessageBox } = useMessageBox();
  const { displaySnackbarSuccess, displaySnackbarError, displaySnackbar } = useSnackbar();

  return (
    <>
      <Button
        onClick={() => {
          displayModal("Test", true, <>Hi</>);
        }}
      >
        Display modal
      </Button>

      <Button
        onClick={() => {
          displayMessageBox("test", "hi", MessageBoxType.Information, true);
        }}
      >
        Display message
      </Button>
      <Button
        onClick={() => {
          displaySnackbarSuccess("success");
        }}
      >
        Display snack
      </Button>
    </>
  );
};
