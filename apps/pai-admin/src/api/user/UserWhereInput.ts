import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type UserWhereInput = {
  email?: StringFilter;
  facebookAccessToken?: StringNullableFilter;
  facebookAccessTokenExpired?: BooleanNullableFilter;
  firebaseAuthId?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  onboardingCompleted?: BooleanNullableFilter;
};
