const removeFromArray = function(array, ...removables) {

  for (const removable of removables) {
    const index =  array.indexOf(removable);

    if (index !== -1) {
      array.splice(index, 1);
    }
    
  }

  return array;

};

// Do not edit below this line
module.exports = removeFromArray;
