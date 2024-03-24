export interface patientProfileObject {
  editProfile: {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date;
    gender: string;
    imgUrl: string;
    mobile: string;
    weight: number | null;
    height: number | null;
    bloodGroup: string;
    allergies: string;
    hereditaryDiseases: string;
  };
}
