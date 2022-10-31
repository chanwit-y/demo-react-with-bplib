import { useQuery } from "@tanstack/react-query";
import { QueryServiceType } from "../@types/ServiceType";

export const useQueryService = <T>({
  queryKey,
  queryFn,
  options = {
    refetchOnWindowFocus: false,
    enabled: false,
  },
}: QueryServiceType<T>) => {
  return useQuery<T, unknown, T, any>(queryKey, queryFn, options);
};
