import { AppointmentList } from "@/types/appointments";

export function convertAppointments(appointmentData: any[]): AppointmentList[] {
  const convertedAppointments: AppointmentList[] = appointmentData.map(
    (appointment) => {
      const {
        firstName,
        lastName,
        imgUrl,
        gender,
        email,
        designation,
        sessionTime,
      } = appointment;

      const doctorName = `${firstName} ${lastName}`;

      const sessionDateTime = new Date(sessionTime);
      const date = sessionDateTime.toISOString().split("T")[0]; // Extracting date in YYYY-MM-DD format
      const time = sessionDateTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }); // Extracting time in HH:MM AM/PM format

      const convertedAppointment: AppointmentList = {
        doctorName,
        imgUrl,
        speciality: designation,
        gender,
        email,
        date,
        time,
      };

      return convertedAppointment;
    }
  );

  return convertedAppointments;
}
