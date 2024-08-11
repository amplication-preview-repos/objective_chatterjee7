import { AppointmentCreateNestedManyWithoutServicesInput } from "./AppointmentCreateNestedManyWithoutServicesInput";

export type ServiceCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutServicesInput;
  barber?: string | null;
  description?: string | null;
  price?: number | null;
  serviceName?: string | null;
};
