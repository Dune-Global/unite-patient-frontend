// import { IDoctorHistoryList } from "@/types/doctor-history";

import { IDoctorPatientDetails } from "@/types/doctor-patient-details";

// export const getDoctorHistory = async (): Promise<IDoctorHistoryList[]> => {
//   return [
//     {
//       id: "728ed52f",
//       date: "17 February 2024",
//       diseaseName: "Fever",
//       diseaseDescription:
//         "A fever is a temporary increase in your body temperature, often due to an illness. Having a fever is a sign that something out of the ordinary is going on in your body.",
//       symptoms:
//         "Sweating, shivering, headache, muscle aches, loss of appetite, dehydration, general weakness",
//       status: "Final Stage",
//     },
//     {
//       id: "729ed52f",
//       date: "17 February 2024",
//       diseaseName: "Parkinson",
//       diseaseDescription:
//         "Parkinson's disease is a brain disorder that leads to shaking, stiffness, and difficulty with walking, balance, and coordination.",
//       symptoms:
//         "Tremor, bradykinesia, limb rigidity, gait and balance problems, loss of smell, sleep disturbances, constipation, depression, anxiety, and cognitive changes",
//       status: "Maintainance Stage",
//     },
//     {
//       id: "729ed53f",
//       date: "17 February 2024",
//       diseaseName: "Headache",
//       diseaseDescription:
//         "A headache is a very common condition that causes pain and discomfort in the head, scalp, or neck.",
//       symptoms: "Tension-type headaches, migraines, cluster headaches",
//       status: "Recovery Stage",
//     },
//   ];
// };

export const PatientHistory: IDoctorPatientDetails[] = [
  {
    _id: "65fd80ca56ff36bcc0ec888b",
    patient: "65fc65a8d362df30121daaae",
    doctor: "65fb2613f552f827b2d9f255",
    doctorLastAccessedDate: null,
    status: "connected",
    prescription: [
      {
        symptoms: "Fever, cough, sore throat",
        diseases: "Common cold",
        description:
          "Common cold is a viral infection of your nose and throat (upper respiratory tract). It's usually harmless, although it might not feel that way. Many types of viruses can cause a common cold.",
        stage: "Maintenance Stage",
        medicine: [
          {
            name: "Paracetamol",
            dose: "500mg",
            time: "After meals",
            _id: "65fd80ef56ff36bcc0ec8892",
          },
          {
            name: "Cough syrup",
            dose: "10ml",
            time: "Before bed",
            _id: "65fd80ef56ff36bcc0ec8893",
          },
        ],
        reports: [
          {
            name: "Blood test",
            dateToTake: "2024-03-20T00:00:00.000Z",
            _id: "65fd80ef56ff36bcc0ec8894",
          },
        ],
        weight: 70,
        height: 180,
        nextChanelDate: "2024-03-25T00:00:00.000Z",
        other: "Drink plenty of fluids and rest",
        _id: "65fd80ef56ff36bcc0ec8891",
        sessionDate: "2024-03-22T13:00:31.548Z",
      },
      {
        symptoms: "Fever, cough, sore throat",
        diseases: "Fever",
        description:
          "Common cold is a viral infection of your nose and throat (upper respiratory tract). It's usually harmless, although it might not feel that way. Many types of viruses can cause a common cold.",
        stage: "Maintenance Stage",
        medicine: [
          {
            name: "Paracetamol",
            dose: "500mg",
            time: "After meals",
            _id: "65fd80ef56ff36bcc0ec8892",
          },
          {
            name: "Cough syrup",
            dose: "10ml",
            time: "Before bed",
            _id: "65fd80ef56ff36bcc0ec8893",
          },
        ],
        reports: [
          {
            name: "Blood test",
            dateToTake: "2024-03-20T00:00:00.000Z",
            _id: "65fd80ef56ff36bcc0ec8894",
          },
        ],
        weight: 70,
        height: 180,
        nextChanelDate: "2024-03-25T00:00:00.000Z",
        other: "Drink plenty of fluids and rest",
        _id: "65fd80ef56ff36bcc0ec8361",
        sessionDate: "2024-03-22T13:00:31.548Z",
      },
      {
        symptoms: "Fever, cough, sore throat",
        diseases: "Rabies",
        description:
          "Common cold is a viral infection of your nose and throat (upper respiratory tract). It's usually harmless, although it might not feel that way. Many types of viruses can cause a common cold.",
        stage: "Maintenance Stage",
        medicine: [
          {
            name: "Paracetamol",
            dose: "500mg",
            time: "After meals",
            _id: "65fd80ef56ff36bcc0ec8892",
          },
          {
            name: "Cough syrup",
            dose: "10ml",
            time: "Before bed",
            _id: "65fd80ef56ff36bcc0ec8893",
          },
        ],
        reports: [
          {
            name: "Blood test",
            dateToTake: "2024-03-20T00:00:00.000Z",
            _id: "65fd80ef56ff36bcc0ec8894",
          },
        ],
        weight: 70,
        height: 180,
        nextChanelDate: "2024-03-25T00:00:00.000Z",
        other: "Drink plenty of fluids and rest",
        _id: "56gd80ef56ff36bcc0ec8361",
        sessionDate: "2024-03-22T13:00:31.548Z",
      },
    ],
    allowedDoctorsToViewThisDoctorsSessionDetails: [],
    allowedReportsToViewByThisDoctor: [],
  },
];
