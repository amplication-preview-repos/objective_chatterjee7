import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";

export type ReviewUpdateInput = {
  appointment?: AppointmentWhereUniqueInput | null;
  comment?: string | null;
  rating?: number | null;
};
