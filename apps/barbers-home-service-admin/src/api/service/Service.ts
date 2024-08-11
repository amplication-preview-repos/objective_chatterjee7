import { Appointment } from "../appointment/Appointment";

export type Service = {
  appointments?: Array<Appointment>;
  barber: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  price: number | null;
  serviceName: string | null;
  updatedAt: Date;
};
