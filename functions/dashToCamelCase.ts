export const dashToCamelCase = (str:string) => {

  // split string into array substrings at the dash
  let splittedArr = str.split('-');

  //map over each item to capitalize each first letter
  let mappedArr = splittedArr.map((item:string) => {
    return (
      // concat cap letter + rest of word
      item[0].toUpperCase() + item.slice(1)
    );
  });

  // join each string together into a merged string 
  let joinedStr = mappedArr.join('')

  //lowercase the first letter of the merged string
  let lowercaseFirst = joinedStr[0].toLowerCase()+joinedStr.slice(1)

  return lowercaseFirst;
};
