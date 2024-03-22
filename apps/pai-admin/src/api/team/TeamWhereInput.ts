import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TeamWhereInput = {
  id?: StringFilter;
  industry?: StringNullableFilter;
  name?: StringNullableFilter;
  websiteUrl?: StringNullableFilter;
};
