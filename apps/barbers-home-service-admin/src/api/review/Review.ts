import { Appointment } from "../appointment/Appointment";

export type Review = {
  appointment?: Appointment | null;
  comment: string | null;
  createdAt: Date;
  id: string;
  rating: number | null;
  updatedAt: Date;
};
