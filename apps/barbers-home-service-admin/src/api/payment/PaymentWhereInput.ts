import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  appointment?: AppointmentWhereUniqueInput;
  id?: StringFilter;
  paymentMethod?: "Option1";
  paymentStatus?: "Option1";
};
