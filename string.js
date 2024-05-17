const fruits = ["apple", "mango", "orange", "papaya", "banana"];

//Find the number of strings with  similar number of characters

// {5: 2, 6: 3}
// {apple: 5, mango: 5, papaya: 6, orange: 6, banana: 6}

const characterObj = fruits.reduce((prev, curr) => {
  const length = curr.length;

  if (length in prev) {
    prev[length]++;
  } else {
    prev[length] = 1;
  }

  return prev;
}, {});

console.log(characterObj);

console.log(sum); // Output: 15
//return an array of objects with key as items and value as number of characters in the string

const arrayOfObjects = fruits.map((fruit) => {
  return { [fruit]: fruit.length };
  //here square bracket indicated that it has create a dynamic key for the object, using the value of the fruit variable as the key name.
  //using map function to map all and returning an array of object
});

console.log(arrayOfObjects);
