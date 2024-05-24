import axios, { AxiosInstance } from "axios";

const client: AxiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

export const API = {
  get: async (url: string) => {
    try {
      const response = await client.get(url);
      return [response, null] as any;
    } catch (error) {
      return [null, error] as any;
    }
  },
};
