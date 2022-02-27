type Item = string | number | object;

export const allUniqueBy = (arr: any, func: (item: any) => Item) => {
  
  // run the function on the array with map
  let mappedArr = arr.map(func);

  // put the mapped array into a new set to remove any duplicates
  let toSet = new Set(mappedArr);

  // evaluate whether the original array has the same length as the new set
  return arr.length === toSet.size;
};
