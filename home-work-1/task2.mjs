import promtSync from 'prompt-sync';

const promt = promtSync({ sigint: true });

const intersection = (...args) => {
  try {
    const result = [];
    let lists = [];
    if (args.length === 1) {
      return args[0];
    } else {
      lists = args;
    }

    for (const currentList of lists) {
      for (const currentValue of currentList) {
        if (result.indexOf(currentValue) == -1) {
          if (
            lists.filter((obj) => {
              return obj.indexOf(currentValue) == -1;
            }).length == 0
          ) {
            result.push(currentValue);
          }
        }
      }
    }
    return result;
  } catch (err) {
    throw err;
  }
};

try {
  const input = promt('Enter arrays  : '); //Input example - [[1,2,3,4,5], [6,7,8,9,10],[1,2,9,10,15]]
  const arrays = JSON.parse(input);
  console.log(intersection(...arrays));
} catch (err) {
  throw err;
}
