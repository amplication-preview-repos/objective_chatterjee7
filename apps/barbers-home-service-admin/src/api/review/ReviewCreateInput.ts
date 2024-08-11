import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";

export type ReviewCreateInput = {
  appointment?: AppointmentWhereUniqueInput | null;
  comment?: string | null;
  rating?: number | null;
};
