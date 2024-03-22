import { UserUpdateManyWithoutTeamsInput } from "./UserUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  industry?: string | null;
  members?: UserUpdateManyWithoutTeamsInput;
  name?: string | null;
  websiteUrl?: string | null;
};
