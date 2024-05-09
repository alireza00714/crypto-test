import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./instance";
import { CommonResponse, Currency, Pair } from "./types";

export const usePairs = () => {
  return useQuery({
    queryKey: ["pairs"],
    refetchInterval: 20 * 1000,
    staleTime: 1000 * 60 * 10, // 10 minutes
    refetchOnWindowFocus: false, // Prevents refetching on window focus
    refetchOnReconnect: false, // Prevents refetching on network reconnect
    queryFn: async () => {
      const { data } = await axiosInstance.get<CommonResponse<Pair>>("/pairs");
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
