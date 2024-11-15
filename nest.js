var input = "She sells sea shells by the sea shore";

const vowels = ["a", "e", "i", "o", "u"];

var resultArray = [];
for (let i = 0; i < input.length; i++) {
  const element = input[i];
  if (element.toLowerCase() === "e" || element.toLowerCase() === "u") {
    resultArray.push(element, element);
  }
  //console.log(input[i]);
  for (let j = 0; j < vowels.length; j++) {
    if (element.toLowerCase() === vowels[j]) {
      resultArray.push(element.toUpperCase());
    }
  }
}

console.log(resultArray);
