import prisma from "../../utils/prisma";

export const getAnalytics = async () => {
  const pageVisit = await prisma.track_page_visit.findUnique({
    where: {
      id: 1,
    },
  });

  const storage = await prisma.track_form.count();

  return {
    pageVisit: pageVisit?.page_visit ?? 0,
    storage,
  };
};
