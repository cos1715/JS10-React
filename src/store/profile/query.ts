import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "store/keys";
import { fetchProfile } from "./service";

export const useProfileQuery = (username: string, enabled = true) => {
  return useQuery({
    queryKey: [QUERY_KEYS.profile, username],
    queryFn: () => fetchProfile(username),
    enabled,
  });
};
