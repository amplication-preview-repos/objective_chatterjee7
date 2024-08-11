import { User } from "../user/User";

export type Subscription = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  isActive: boolean | null;
  startDate: Date | null;
  subscriptionPlan?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
