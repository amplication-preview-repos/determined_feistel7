import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { TeamListRelationFilter } from "../team/TeamListRelationFilter";

export type UserWhereInput = {
  email?: StringFilter;
  facebookAccessToken?: StringNullableFilter;
  facebookAccessTokenExpired?: BooleanNullableFilter;
  firebaseAuthId?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  onboardingCompleted?: BooleanNullableFilter;
  teams?: TeamListRelationFilter;
};
