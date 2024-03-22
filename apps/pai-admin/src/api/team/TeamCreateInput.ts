import { InputJsonValue } from "../../types";

export type TeamCreateInput = {
  industry?: string | null;
  members?: InputJsonValue;
  name?: string | null;
  websiteUrl?: string | null;
};
