import { User } from "../user/User";

export type Team = {
  createdAt: Date;
  id: string;
  industry: string | null;
  members?: Array<User>;
  name: string | null;
  updatedAt: Date;
  websiteUrl: string | null;
};
