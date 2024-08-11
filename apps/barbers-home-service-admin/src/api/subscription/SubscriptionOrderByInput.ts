import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  startDate?: SortOrder;
  subscriptionPlan?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
