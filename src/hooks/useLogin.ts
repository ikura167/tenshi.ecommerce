import { ErrorMessage } from "@/constants/dtos/errorMessage";
import { LoginRequest } from "@/constants/dtos/users/request/loginRequest";
import { LoginResponse } from "@/constants/dtos/users/response/loginResponse";
import { loginApi } from "@/services/authService";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () =>
  useMutation<LoginResponse, ErrorMessage, LoginRequest>({
    mutationFn: (body) =>
      loginApi({
        body,
      }),
  });
