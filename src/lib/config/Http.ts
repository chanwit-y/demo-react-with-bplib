import { HttpClientFactory } from "@banpudev/http-client";
import { getAccessToken } from "@banpudev/react-auth";
import Env from "./Env";

export interface Response<T> {
  data: T;
  message: string;
  error: boolean;
}

export const unwrapData = async <T>(response: Response<T>) =>
  response.data;

export const http = new HttpClientFactory(
  `${Env.API_ENDPOINT}`,
  getAccessToken,
  "1.0.0",
  60000,
  [],
  [],
  unwrapData);

