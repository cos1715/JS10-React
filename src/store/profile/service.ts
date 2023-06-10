import { Endpoints } from "@octokit/types";
import { octokit } from "../../App";

type TUsernameResp = Endpoints["GET /users/{username}"]["response"];

export const fetchProfile = (username: string): Promise<TUsernameResp> => {
  return octokit.request(`GET /users/${username}`) as any;
};
