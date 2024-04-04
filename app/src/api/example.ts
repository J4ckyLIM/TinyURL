import { queryClient } from "../queryClient";
import { fetchApi, methods } from "./fetchApi";
import { useMutation, useQuery } from "@tanstack/react-query";

export interface MutationExampleArgs {
  onSuccess?: (successCallbackData: any) => void;
  onError?: (error: Error) => void;
}

const uri = "/example";

export const useExampleQuery = () =>
  useQuery<any, Error>({
    queryKey: [uri],
    queryFn: async (): Promise<any> => {
      return fetchApi({
        uri: `${uri}/example`,
        method: methods.GET,
      });
    },
  });

export const useExampleMutation = () =>
  useMutation<
    { message: string; mutationResult: any },
    Error,
    MutationExampleArgs
  >({
    mutationFn: async (): Promise<{ message: string; mutationResult: any }> =>
      fetchApi({
        uri: `${uri}/mutation-example`,
        method: methods.POST,
      }),
    onSuccess: (data, { onSuccess }) => {
      queryClient.invalidateQueries([uri]);
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
