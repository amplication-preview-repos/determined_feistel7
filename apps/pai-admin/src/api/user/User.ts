import { JsonValue } from "type-fest";

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
  updatedAt: Date;
};
