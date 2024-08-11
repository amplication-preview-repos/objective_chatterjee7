import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  appointmentId?: SortOrder;
  comment?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
