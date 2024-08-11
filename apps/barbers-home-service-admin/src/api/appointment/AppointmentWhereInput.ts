import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type AppointmentWhereInput = {
  appointmentTime?: DateTimeNullableFilter;
  barber?: StringNullableFilter;
  customer?: StringNullableFilter;
  id?: StringFilter;
  payments?: PaymentListRelationFilter;
  reviews?: ReviewListRelationFilter;
  service?: ServiceWhereUniqueInput;
  status?: "Option1";
};
