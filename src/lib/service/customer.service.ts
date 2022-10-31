import {
  HttpMethod,
  query,
  FnNone,
  mutate,
  Request,
  None,
} from "@banpudev/http-client";
import { http } from "../config/Http";
import { Customer } from "../model/Customer";

class CustomerService {
  @query({ http, apiUrl: "/customer", httpMethod: HttpMethod.GET })
  public  get() {
    return {
      queryKey: ["getCustomer"],
      queryFn: FnNone<Customer[]>,
      options: {
        refetchOnWindowFocus: false,
      },
    };
  }

  @mutate({ http, apiUrl: "/customer", httpMethod: HttpMethod.POST })
  public async create(_: Request<None, None, Customer>) {
    return FnNone<Customer>();
  }
}

export default new CustomerService();
