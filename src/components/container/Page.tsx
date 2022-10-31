import { useQuery } from "@tanstack/react-query";
import customerSrv from "../../lib/service/customer.service";

export const Page = () => {
  const { data } = useQuery(customerSrv.get());

  return (
    <>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
      {data?.map((item, i) => (
        <div key={i}>{item.Email}</div>
      ))}
    </>
  );
};
