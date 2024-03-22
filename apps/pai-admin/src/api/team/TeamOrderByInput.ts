import { SortOrder } from "../../util/SortOrder";

export type TeamOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  industry?: SortOrder;
  members?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  websiteUrl?: SortOrder;
};
