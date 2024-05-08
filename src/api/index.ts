import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./instance";
import { CommonResponse, Currency, Pairs } from "./types";

export const usePairs = () => {
  return useQuery({
    queryKey: ["pairs"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<CommonResponse<Pairs>>("/pairs");
      return data;
    },
  });
};

export const useCurrencies = () => {
  return useQuery({
    queryKey: ["currencies"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<CommonResponse<Currency>>(
        "/currencies"
      );
      return data;
    },
  });
};
