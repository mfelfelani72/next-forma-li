/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-14 09:23:34
 * @Description:
 */

import axiosClient from "./axiosClient";

// Interfaces
interface ConnectParams<T = any> {
  method?: "get" | "post" | "put" | "delete" | "patch";
  endPoint: string;
  body?: T;
  headers?: any;
  route?: string;
}

export const cns = async <T = any>({
  method = "post",
  endPoint,
  body,
  route,
}: ConnectParams<T>) => {
  try {
    let config;

    let response;

    switch (method) {
      case "get":
        response = await axiosClient.get<T>(endPoint, config);
        break;
      case "post":
        response = await axiosClient.post<T>(endPoint, body, config);
        break;
      case "put":
        response = await axiosClient.put<T>(endPoint, body, config);
        break;
      case "patch":
        response = await axiosClient.patch<T>(endPoint, body, config);
        break;
      case "delete":
        response = await axiosClient.delete<T>(endPoint, config);
        break;
      default:
        throw new Error(`Unsupported method: ${method}`);
    }

    return response.data;
  } catch (error: any) {
    console.error({
      message: `Connection to server failed, route: ${route || endPoint}`,
      error,
    });
    throw error;
  }
};
