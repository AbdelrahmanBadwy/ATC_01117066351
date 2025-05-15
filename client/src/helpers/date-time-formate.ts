import dayjs from "dayjs";

export const getDateFormat = (date: string) => {
  return dayjs(date).format("DD/MM/YYYY");
};

export const getDateTimeFormat = (date: string) => {
  return dayjs(date).format("DD/MM/YYYY hh:mm A");
};
