export const isWeekend = (date) => {
  const day = date.getDay();
  return day === 0 || day === 6; // 0 es Domingo, 6 es Sábado
};

export const isWorkingDay = (date) => {
  return !isWeekend(date);
};

export const addWorkdays = (date, days) => {
  const result = new Date(date);
  while (days > 0) {
    result.setDate(result.getDate() + 1);
    if (isWorkingDay(result)) {
      days--;
    }
  }
  return result;
};

export const today = new Date();

export const minDate = addWorkdays(today, 2);
