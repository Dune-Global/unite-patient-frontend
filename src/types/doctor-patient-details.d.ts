export type IDoctorPatientDetails = {
  _id: string;
  patient: string;
  doctor: string;
  doctorLastAccessedDate: string | null;
  status: string;
  allowedDoctorsToViewThisDoctorsSessionDetails: string[];
  allowedReportsToViewByThisDoctor: string[];
  prescription: Prescription[];
};

type Prescription = {
  sessionDate: string;
  symptoms: string;
  diseases: string;
  description: string;
  stage: string;
  weight: number;
  height: number;
  nextChanelDate: string;
  other: string;
  _id: string;
  medicine: Medicine[];
  reports: Report[];
};

type Medicine = {
  name: string;
  dose: string;
  time: string;
  _id: string;
};

type Report = {
  name: string;
  dateToTake: string;
  _id: string;
};
