const operations = (string) => {
  const list = string.split(",");
  const listComplete = replace(completeList(fullNumberList(list)));
  console.log(listComplete);
  try {
    const result = eval(listComplete.join(''))
  } catch (error) {
    return 'syntaxError'
  }
  return eval(listComplete.join(''));
};
const fullNumberList = (list) => {
  const listComplete = [];
  let index = 0;
  let number = "";
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  list.forEach((element) => {
    index++;
    if (numbers.includes(element) == false) {
      listComplete.push(element);
    }
    if (numbers.includes(element)) {
      number += element;
    }
    if (numbers.includes(element) && numbers.includes(list[index]) == false) {
      listComplete.push(number);
      number = "";
    }
  });
  return listComplete;
};
const completeList = (list) => {
  const listComplete = [];
  let index = 0;
  const noNumber = ["√", "^", "*", "/", "+", "-", "π", "(", ")"];
  list.forEach((element) => {
    index++;
    listComplete.push(element);
    if (noNumber.includes(element) == false && list[index] == "√") {
      listComplete.push("*");
    }
    if (noNumber.includes(element) == false && list[index] == "π") {
      listComplete.push("*");
    }
    if (noNumber.includes(element) == false && list[index] == "(") {
      listComplete.push("*");
    }
    if (
      element == ")" &&
      noNumber.includes(list[index]) == false &&
      list[index] !== undefined
    ) {
      listComplete.push("*");
    }
    if (
      element == "π" &&
      noNumber.includes(list[index]) == false &&
      list[index] !== undefined
    ) {
      listComplete.push("*");
    }
    if (element == ")" && list[index] == "(") {
      listComplete.push("*");
    }
    if (element == ")" && list[index] == "π") {
      listComplete.push("*");
    }
    if (element == ")" && list[index] == "√") {
      listComplete.push("*");
    }
    if (element == "π" && list[index] == "(") {
      listComplete.push("*");
    }
    if (element == "π" && list[index] == "√") {
      listComplete.push("*");
    }
  });
  return listComplete;
};
const replace = (list) => {
  let index = -1;
  list.forEach((element) => {
    index++
    if (element == "^") {
      list[index] = "**";
    }
    if (element == "π") {
      list[index] = 'Math.PI';
    }
    if (element == "√" && list[index + 1] == "(") {
      list[index] = "Math.sqrt";
    }
    if (
      element == "√" &&
      list[index + 1] != "(" &&
      list[index + 1] != undefined
    ) {
      list[index] = "Math.sqrt(";
      list[index+1] = list[index+1]+=')'
    }
  });
  return list
};
export default operations;
