import { PaymentUpdateManyWithoutAppointmentsInput } from "./PaymentUpdateManyWithoutAppointmentsInput";
import { ReviewUpdateManyWithoutAppointmentsInput } from "./ReviewUpdateManyWithoutAppointmentsInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type AppointmentUpdateInput = {
  appointmentTime?: Date | null;
  barber?: string | null;
  customer?: string | null;
  payments?: PaymentUpdateManyWithoutAppointmentsInput;
  reviews?: ReviewUpdateManyWithoutAppointmentsInput;
  service?: ServiceWhereUniqueInput | null;
  status?: "Option1" | null;
};
