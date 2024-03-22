import { JsonValue } from "type-fest";
import { Team } from "../team/Team";

export type User = {
  createdAt: Date;
  email: string;
  facebookAccessToken: string | null;
  facebookAccessTokenExpired: boolean | null;
  firebaseAuthId: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  onboardingCompleted: boolean | null;
  roles: JsonValue;
  teams?: Array<Team>;
  updatedAt: Date;
};
