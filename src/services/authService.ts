import { API_PATH } from "@/constants/apiConfig";
import { LoginRequest } from "@/constants/dtos/users/request/loginRequest";
import { LoginResponse } from "@/constants/dtos/users/response/loginResponse";
import type { APIOptions } from "@/constants/fetchAPI";
import { fetchAPI } from "@/utils/fetchAPI";

export const loginApi = ({ ...opts }: APIOptions<LoginRequest>) => {
  const url = `${API_PATH}/auth/login` + (opts.query ? `?${opts.query}` : "");
  return fetchAPI<LoginResponse>({
    url: url,
    method: "POST",
    ...opts,
  });
};

//   return useQuery<LoginResponse, ErrorMessage>({
//     queryKey: ["curUser"],
//     queryFn: () =>
//       fetchAPI<LoginResponse>({
//         url: url,
//         method: "POST",
//         ...opts,
//       }),
//     staleTime: 1000 * 60 * 5,
//     refetchInterval: 1000 * 60 * 5,
//   });
