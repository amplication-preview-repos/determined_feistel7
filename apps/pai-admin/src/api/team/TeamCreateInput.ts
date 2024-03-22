import { UserCreateNestedManyWithoutTeamsInput } from "./UserCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  industry?: string | null;
  members?: UserCreateNestedManyWithoutTeamsInput;
  name?: string | null;
  websiteUrl?: string | null;
};
