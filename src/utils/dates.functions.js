export const getAllDaysBetweenDates = (start, end, dayName) => {
  if (!dayName) {
    throw new Error('dayName must be defined.');
  }

  const result = [];
  const  days = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6
  };

  const day = days[dayName.toLowerCase()];

  if (day == null) {
    throw new Error('Invalid dayName, use one of the following { sunday, monday, tuesday, wednesday, thursday, friday, saturday }');
  }

  const current = start ? new Date(Number(start)) : new Date();
  console.log('start date: ', current);
  end = end ? new Date(Number(end)) : new Date(current.getFullYear() + 1);
  console.log('end date: ', end);

  current.setDate(current.getDate() + (day - current.getDay() + 7 % 7));
  console.log(current);

  while (current < end) {
    if (current > start) {
      result.push(new Date(Number(current)));
    }
    current.setDate(current.getDate() + 7);
  }

  return result;
}

export const MONTHS = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December'
}