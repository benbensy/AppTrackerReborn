import { useRequest } from "vue-request";
import { post } from "./axios";

interface SignUpUserPayload {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

export interface SignUpUserResponse {
  user: {
    id: string;
  };
}
const signUpUser = async (payload: SignUpUserPayload) => {
  const { data } = await post<SignUpUserResponse | null | undefined>(
    "/api/appinfo",
    payload
  );
  return data;
};

export function useSignUpUser() {
  return useRequest(signUpUser, {
    manual: true,
  });
}

interface LoginUserPayload {
  username: string;
  password: string;
}

interface LoginUserResponse {
  value: string;
}
export const loginUser = async (payload: LoginUserPayload) => {
  const { data } = await post<LoginUserResponse>("/api/users/login", {}, { auth: payload });
  return data;
};