export const isFormValid = ({ date, time, guests, occasion }) => {
  return date && time && guests >= 1 && guests <= 10 && occasion;
};
