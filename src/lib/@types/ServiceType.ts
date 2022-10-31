import { MutationFunction, QueryFunction, QueryKey, UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";


export type QueryServiceType<
TQueryFnData = unknown,
TError = unknown,
TData = TQueryFnData,
TQueryKey extends QueryKey = QueryKey
> = {
  queryKey: TQueryKey;
  queryFn: QueryFunction<TQueryFnData, TQueryKey>;
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    "queryKey" | "queryFn"
  >;
};

export type MutationServiceOption<TData, TError, TVariables, TContext>
= Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>

export type MutationServiceQueryFnType<T = unknown, V = unknown> = MutationFunction<T, V>

export type MutationServiceType<
TData = unknown,
TError = unknown,
TVariables = void,
TContext = unknown,
> = {
  queryFn: MutationServiceQueryFnType<TData, TVariables>
  options?: MutationServiceOption<TData, TError, TVariables, TContext>
};

export class ErrorBackend {
	readonly code: string
	readonly message: string
      
	constructor(code: string, message: string) {
	  this.code = code
	  this.message = message
	}
      }
