import { InputJsonValue } from "../../types";

export type TeamUpdateInput = {
  industry?: string | null;
  members?: InputJsonValue;
  name?: string | null;
  websiteUrl?: string | null;
};
