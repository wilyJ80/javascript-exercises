const sumAll = function(bound1, bound2) {

  let first = 0; last = 0;
  if (bound1 > bound2) { last = bound1; first = bound2;}
  else if (bound2 > bound1) { first = bound1; last = bound2;}
  else { return bound1; }

  let sum = 0;
  for (let i = first; i <= last; i++) {
    sum += i;
  }

  return sum;

};

// Do not edit below this line
module.exports = sumAll;
