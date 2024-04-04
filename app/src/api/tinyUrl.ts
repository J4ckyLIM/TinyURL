import { TinyUrl } from "../types/tinyUrl";
import { fetchApi, methods } from "./fetchApi";
import { useMutation, useQuery } from "@tanstack/react-query";

export interface UseCreateTinyUrlMutationArgs {
  url: string;
  expiresAt?: string;
  onSuccess?: (data: TinyUrl) => void;
  onError?: (error: Error) => void;
}

export const useTinyUrlQuery = (slug: string) =>
  useQuery({
    queryKey: ["tinyUrl", slug],
    queryFn: async () =>
      fetchApi({
        uri: `${slug}`,
      }),
  });

export const useCreateTinyUrlMutation = () =>
  useMutation<TinyUrl, Error, UseCreateTinyUrlMutationArgs>({
    mutationFn: async ({ url, expiresAt }) =>
      fetchApi({
        uri: "",
        method: methods.POST,
        body: {
          originalUrl: url,
          expiresAt,
        },
      }),
    onSuccess: (data, { onSuccess }) => {
      if (onSuccess) {
        onSuccess(data);
      }
    },
    onError: (error, { onError }) => {
      if (onError) {
        onError(error);
      }
    },
  });
