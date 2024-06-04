import { baseApi } from "@/services/baseapi";
import { User } from "../constants/types";

export const signup = (email: string, password: string) => {
  return baseApi
    .post<User>("users/signup", { email, password })
    .then((res) => res.data);
};
