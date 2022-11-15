import {
  MessageBoxType,
  useMessageBox,
  useModal,
  useSnackbar,
} from "@banpudev/react-components";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../lib/config";
import { useMutationService } from "../../lib/hook/useMutationService";
import { useQueryService } from "../../lib/hook/useQueryService";
import { Customer } from "../../lib/model/Customer";
import customerSrv from "../../lib/service/customer.service";
import { TextField } from "../common";

export const Page = () => {
  const { userProfile, username, login, logout } = useAuth();
  const { displayModal } = useModal();
  const { displayMessageBox } = useMessageBox();
  const { displaySnackbar, displaySnackbarError, displaySnackbarSuccess } =
    useSnackbar();
  const { data, refetch } = useQueryService(customerSrv.get());
  const createCus = useMutationService({ queryFn: customerSrv.create });

  const [cus, setCus] = useState<Customer>({} as Customer);

  return (
    <>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
      <Button onClick={() => refetch()}>Refetch</Button>
      <Button
        onClick={() => {
          displayMessageBox(
            "Title",
            "description",
            MessageBoxType.Information,
            true
          );
        }}
      >
        Message box
      </Button>
      <Button
        onClick={() => {
          displaySnackbarSuccess("success")
        }}
      >
       Snackbar success 
      </Button>
      <Button
        onClick={() => {
          displaySnackbarError("error")
        }}
      >
       Snackbar error 
      </Button>
      <Button
        onClick={() => {
          displayModal("Title", true, <>Hi</>);
        }}
      >
        Modal
      </Button>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Code"
          value={cus?.Code}
          onChange={(e) =>
            setCus((prev) => ({ ...prev, Code: e?.target?.value }))
          }
        />
        <TextField
          label="Name"
          value={cus.Name}
          onChange={(e) =>
            setCus((prev) => ({ ...prev, Name: e.target.value }))
          }
        />
        <TextField
          label="Tel"
          value={cus.Tel}
          onChange={(e) => setCus((prev) => ({ ...prev, Tel: e.target.value }))}
        />
        <TextField
          label="Email"
          value={cus.Email}
          onChange={(e) =>
            setCus((prev) => ({ ...prev, Email: e.target.value }))
          }
        />
        <Button
          onClick={() => {
            createCus.mutate(
              {
                body: cus,
              },
              {
                onSuccess: (res) => {
                  console.log(res);
                  refetch();
                },
                
              }
            );
          }}
        >
          Save
        </Button>
      </Box>

      <pre>{JSON.stringify(userProfile, undefined, 2)}</pre>
    </>
  );
};
