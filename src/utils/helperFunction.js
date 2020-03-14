/* leads zero when necessary. for example 8 becomes 08*/
const leadZero = val => {
  if (val >= 0 && val <= 9) {
    return '0' + val;
  }

  return val;
};

/* accepts the time in seconds and displays it like this 00:00 */
export const displayTimer = timestamp => {
  const seconds = timestamp % 60;
  const minutes = (timestamp - seconds) / 60;

  return leadZero(minutes) + ':' + leadZero(seconds);
};
