import { JsonValue } from "type-fest";

export type Team = {
  createdAt: Date;
  id: string;
  industry: string | null;
  members: JsonValue;
  name: string | null;
  updatedAt: Date;
  websiteUrl: string | null;
};
