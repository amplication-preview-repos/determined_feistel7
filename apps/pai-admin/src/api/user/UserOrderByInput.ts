import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  facebookAccessToken?: SortOrder;
  facebookAccessTokenExpired?: SortOrder;
  firebaseAuthId?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  onboardingCompleted?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
};
