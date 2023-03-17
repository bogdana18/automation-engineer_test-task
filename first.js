/* Extend JS Date object with a method daysTo() which returns number of complete days between
any pair of JS date objects: d1.daysTo(d2) should return quantity of complete days from d1 to
d2. */

Date.prototype.daysTo = function(otherDate) {
  // Convert both dates to UTC time to avoid issues with daylight saving time
  const utc1 = Date.UTC(this.getFullYear(), this.getMonth(), this.getDate());
  const utc2 = Date.UTC(otherDate.getFullYear(), otherDate.getMonth(), otherDate.getDate());

  // Calculate the difference in days between the two UTC dates
  const diffDays = Math.floor(Math.abs((utc2 - utc1) / (1000 * 60 * 60 * 24)));

  return diffDays;
}

const d1 = new Date('2022-03-13');
const d2 = new Date('2022-03-25');

console.log(d1.daysTo(d2));