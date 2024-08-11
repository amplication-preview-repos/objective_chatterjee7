import { AppointmentUpdateManyWithoutServicesInput } from "./AppointmentUpdateManyWithoutServicesInput";

export type ServiceUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutServicesInput;
  barber?: string | null;
  description?: string | null;
  price?: number | null;
  serviceName?: string | null;
};
