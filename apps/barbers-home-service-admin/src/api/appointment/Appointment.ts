import { Payment } from "../payment/Payment";
import { Review } from "../review/Review";
import { Service } from "../service/Service";

export type Appointment = {
  appointmentTime: Date | null;
  barber: string | null;
  createdAt: Date;
  customer: string | null;
  id: string;
  payments?: Array<Payment>;
  reviews?: Array<Review>;
  service?: Service | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
