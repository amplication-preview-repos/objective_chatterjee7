import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  appointment?: AppointmentWhereUniqueInput | null;
  paymentMethod?: "Option1" | null;
  paymentStatus?: "Option1" | null;
};
