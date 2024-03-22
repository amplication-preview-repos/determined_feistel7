import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type TeamWhereInput = {
  id?: StringFilter;
  industry?: StringNullableFilter;
  members?: UserListRelationFilter;
  name?: StringNullableFilter;
  websiteUrl?: StringNullableFilter;
};
