import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionCreateInput = {
  endDate?: Date | null;
  isActive?: boolean | null;
  startDate?: Date | null;
  subscriptionPlan?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
