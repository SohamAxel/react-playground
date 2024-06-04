import { baseApi } from "@/services/baseapi";
import { User } from "../constants/types";

export const signup = (email: string, password: string) => {
  return baseApi
    .post<User>("users/signup", { email, password })
    .then((res) => res.data);
};

export const login = (email: string, password: string) => {
  return baseApi
    .post<User>("/users/login", { email, password })
    .then((res) => res.data);
};

export const getSession = () => {
  return baseApi.get<User>("/users/session").then((res) => res.data);
};

export const logout = () => {
  return baseApi.delete<User>("/users/logout").then((res) => res.data);
};
