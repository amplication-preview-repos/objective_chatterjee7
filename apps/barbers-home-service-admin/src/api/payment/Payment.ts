import { Appointment } from "../appointment/Appointment";

export type Payment = {
  amount: number | null;
  appointment?: Appointment | null;
  createdAt: Date;
  id: string;
  paymentMethod?: "Option1" | null;
  paymentStatus?: "Option1" | null;
  updatedAt: Date;
};
