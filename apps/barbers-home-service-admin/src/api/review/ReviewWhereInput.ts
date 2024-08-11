import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ReviewWhereInput = {
  appointment?: AppointmentWhereUniqueInput;
  comment?: StringNullableFilter;
  id?: StringFilter;
  rating?: IntNullableFilter;
};
