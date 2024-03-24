export const convertToObject = (input: any) => {
  let editProfile = {
    firstName: input.firstName || "",
    lastName: input.lastName || "",
    email: input.email || "",
    dateOfBirth: input.dateOfBirth || "",
    gender: input.gender || "",
    imgUrl: input.imgUrl || "",
    mobile: input.mobile || "",
    weight: !isNaN(parseFloat(input.weight)) ? parseFloat(input.weight) : null,
    height: !isNaN(parseFloat(input.height)) ? parseFloat(input.height) : null,
    bloodGroup: input.bloodGroup || "", // Added bloodGroup property
    allergies: input.allergies || "",
    hereditaryDiseases: input.hereditaryDiseases || "",
  };

  return { editProfile };
};
