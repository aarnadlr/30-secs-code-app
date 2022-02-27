// sample arg: "helloThereWelcome"

export const camelCaseToDash = (str: string) => {

  //string.split: split the string into an array of substrings at the capital letter
  let splittedArr = str.split(/(?=[A-Z])/g);
  
  let lowercaseEach = splittedArr.map((item) => item.toLowerCase());

  let joinedStr = lowercaseEach.join('-')

  return joinedStr;
}