import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  appointment?: AppointmentWhereUniqueInput | null;
  paymentMethod?: "Option1" | null;
  paymentStatus?: "Option1" | null;
};
