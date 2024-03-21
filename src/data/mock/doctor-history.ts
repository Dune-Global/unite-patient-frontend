import { IDoctorHistoryList } from "@/types/doctor-history";

export const getDoctorHistory = async (): Promise<IDoctorHistoryList[]> => {
  return [
    {
      id: "728ed52f",
      date: "17 February 2024",
      diseaseName: "Fever",
      diseaseDescription:
        "A fever is a temporary increase in your body temperature, often due to an illness. Having a fever is a sign that something out of the ordinary is going on in your body.",
      symptoms:
        "Sweating, shivering, headache, muscle aches, loss of appetite, dehydration, general weakness",
      status: "Final Stage",
    },
    {
      id: "729ed52f",
      date: "17 February 2024",
      diseaseName: "Parkinson",
      diseaseDescription:
        "Parkinson's disease is a brain disorder that leads to shaking, stiffness, and difficulty with walking, balance, and coordination.",
      symptoms:
        "Tremor, bradykinesia, limb rigidity, gait and balance problems, loss of smell, sleep disturbances, constipation, depression, anxiety, and cognitive changes",
      status: "Maintainance Stage",
    },
    {
      id: "729ed53f",
      date: "17 February 2024",
      diseaseName: "Headache",
      diseaseDescription:
        "A headache is a very common condition that causes pain and discomfort in the head, scalp, or neck.",
      symptoms: "Tension-type headaches, migraines, cluster headaches",
      status: "Recovery Stage",
    },
  ];
};
