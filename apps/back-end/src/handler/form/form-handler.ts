import prisma from "../../utils/prisma";

export const createFormSubmission = async (params: {
  name: string;
  email: string;
  phone: string;
  utmData: {
    source: string;
    medium: string;
    campaign: string;
  };
}) => {
  const { name, email, phone, utmData } = params;

  const submission = {
    name,
    email,
    phone,
    ...utmData,
    submittedAt: new Date().toISOString(),
  };

  await prisma.track_form.create({ data: submission });

  return submission;
};
