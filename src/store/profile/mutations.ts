import { useMutation } from "@tanstack/react-query";
import { fetchProfile } from "./service";
import { useAuthContext } from "providers/auth";

export const useProfileMutation = () => {
  const { setAuth } = useAuthContext();

  return useMutation({
    mutationFn: (username: string) => fetchProfile(username),
    onSuccess: (data) => {
      localStorage.setItem("authLogin", data.data.login);
      setAuth(data.data.login);
    },
  });
};
