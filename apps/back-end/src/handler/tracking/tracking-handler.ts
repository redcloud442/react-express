import prisma from "../../utils/prisma";

export const trackPageVisit = async () => {
  const pageVisit = await prisma.track_page_visit.update({
    where: {
      id: 1,
    },
    data: {
      page_visit: {
        increment: 1,
      },
    },
  });

  return pageVisit?.page_visit ?? 0;
};
