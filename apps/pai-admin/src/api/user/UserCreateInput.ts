import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email: string;
  facebookAccessToken?: string | null;
  facebookAccessTokenExpired?: boolean | null;
  firebaseAuthId?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  onboardingCompleted?: boolean | null;
  roles: InputJsonValue;
};
