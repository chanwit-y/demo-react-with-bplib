import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useMutationService } from "../../lib/hook/useMutationService";
import { useQueryService } from "../../lib/hook/useQueryService";
import { Customer } from "../../lib/model/Customer";
import customerSrv from "../../lib/service/customer.service";
import { TextField } from "../common";

export const Page = () => {
  const { data, refetch } = useQueryService(customerSrv.get());
  const createCus = useMutationService({ queryFn: customerSrv.create });

  const [cus, setCus] = useState<Customer>({} as Customer);

  return (
    <>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
      <pre>{JSON.stringify(cus, undefined, 2)}</pre>
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
            createCus.mutate({
		body: cus 
	    }, {
              onSuccess: (res) => {
                console.log(res);
		refetch();
              },
            });
          }}
        >
          Save
        </Button>
      </Box>
    </>
  );
};
