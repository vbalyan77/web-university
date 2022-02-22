import promtSync from 'prompt-sync';

const promt = promtSync({ sigint: true });
//Counting sort
const compareStrings = (str1, str2) => {
  try {
    const charCounts = Array(256).fill(0);
    if (str1.length != str2.length) return false;

    for (let i = 0; i < str1.length; i++) {
      charCounts[str1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
      charCounts[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }

    for (const count of charCounts) {
      if (count) return false;
    }

    return true;
  } catch (err) {
    throw err;
  }
};

const firstString = promt('Enter first string : ');
const secondString = promt('Enter second string : ');

if (compareStrings(firstString, secondString)) console.log(true);
else console.log(false);
