export const next7days = Array(7)
  .fill()
  .map((_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    return date;
  });

export const isDatesSame = (date1, date2) => {
  return (
    date1.getYear() === date2.getYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};
