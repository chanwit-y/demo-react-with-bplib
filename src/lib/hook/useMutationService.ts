import { useMutation } from "@tanstack/react-query";
import { MutationServiceType, ErrorBackend } from "../@types/ServiceType";

export const useMutationService = <T, E = ErrorBackend | any, V = void>({
  queryFn,
  options = {},
}: MutationServiceType<T, E, V>) => {
  return useMutation<T, E, V>(queryFn, options);
};