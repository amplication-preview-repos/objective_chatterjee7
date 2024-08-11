import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  appointmentTime?: SortOrder;
  barber?: SortOrder;
  createdAt?: SortOrder;
  customer?: SortOrder;
  id?: SortOrder;
  serviceId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
