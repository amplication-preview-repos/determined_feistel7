import { InputJsonValue } from "../../types";
import { TeamCreateNestedManyWithoutUsersInput } from "./TeamCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email: string;
  facebookAccessToken?: string | null;
  facebookAccessTokenExpired?: boolean | null;
  firebaseAuthId?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  onboardingCompleted?: boolean | null;
  roles: InputJsonValue;
  teams?: TeamCreateNestedManyWithoutUsersInput;
};
