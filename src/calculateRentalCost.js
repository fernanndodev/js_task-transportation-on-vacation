'use strict';
/**
 * @param {number} days
 *
 * @return {number}
 */

const lowDays = 3;
const middleDays = 6;
const withoutDescont = 40;
const lowDescont = 20;
const highDescont = 50;
let total = 0;

function calculateRentalCost(days) {
  if (days < lowDays) {
    total = days * withoutDescont;

    return total;
  } else if (days >= lowDays && days <= middleDays) {
    total = days * withoutDescont - lowDescont;

    return total;
  }
  total = days * withoutDescont - highDescont;

  return total;
}

module.exports = calculateRentalCost;
