import { PaymentCreateNestedManyWithoutAppointmentsInput } from "./PaymentCreateNestedManyWithoutAppointmentsInput";
import { ReviewCreateNestedManyWithoutAppointmentsInput } from "./ReviewCreateNestedManyWithoutAppointmentsInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type AppointmentCreateInput = {
  appointmentTime?: Date | null;
  barber?: string | null;
  customer?: string | null;
  payments?: PaymentCreateNestedManyWithoutAppointmentsInput;
  reviews?: ReviewCreateNestedManyWithoutAppointmentsInput;
  service?: ServiceWhereUniqueInput | null;
  status?: "Option1" | null;
};
