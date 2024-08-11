import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "barber";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.barber?.toString() || String(record.id);
};
