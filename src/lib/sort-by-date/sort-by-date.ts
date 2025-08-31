export const sortByDate = (firstDate: Date, secondDate: Date) => {
  return secondDate.getTime() - firstDate.getTime();
};
