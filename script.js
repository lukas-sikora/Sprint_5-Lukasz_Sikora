const people = [
  {
    firstName: false,
    lastName: 2,
  },
  {
    firstName: "Roman",
    lastName: "Kowalski",
  },

  {
    firstName: "Halina",
    lastName: "Malina",
  },
  {
    firstName: "B",
    lastName: "22",
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
  },
  {
    firstName: "Kamil",
    lastName: null,
  },
];

// ZADANIE 1

const nicknameGenerator = people.map((person) => {
  const { firstName, lastName } = person;
  if (
    typeof firstName === "string" &&
    firstName.trim().length >= 3 &&
    typeof lastName === "string" &&
    lastName.trim().length >= 3
  ) {
    const firstPartNickname = firstName
      .slice(-3)
      .toLowerCase()
      .split("")
      .reverse()
      .join("");

    const secondPartNickname = lastName
      .slice(0, 3)
      .toLowerCase()
      .split("")
      .reverse()
      .join("");

    const nickName = `${firstPartNickname
      .charAt(0)
      .toUpperCase()}${firstPartNickname.slice(1)}${secondPartNickname}`;

    return {
      ...person,
      nickName,
    };
  } else {
    return person;
  }
});
console.log("ZADANIE 1", nicknameGenerator);

// ZADANIE 2

const addAge = nicknameGenerator
  .filter(person => person.nickName)
  .map((person, index) => {
    const sumNamesLength =
      person.firstName.trim().length + person.lastName.trim().length;
    let age;

    if (sumNamesLength % 2 === 0) {
      age = sumNamesLength;
    } else {
      const sumKeysLength = Object.keys(person).reduce(
        (acc, key) => acc + key.length,
        0
      );
      age = Math.ceil(sumKeysLength / (index === 0 ? 1 : index));
    }
    return { ...person, age };
  });

console.log("ZADANIE 2", addAge);

// ZADANIE 3

const countingLettersAnalyse = addAge.map((person) => {
  const { firstName, lastName, nickName } = person;
  const textForVerification = (firstName + lastName + nickName)
    .toLowerCase()
    .split("");

  const countedLetters = {};
  textForVerification.forEach((letter) => {
    countedLetters[letter] = (countedLetters[letter] || 0) + 1;
  });
  let maxLetter = null;
  let maxCount = 0;

  Object.keys(countedLetters).forEach((letter) => {
    if (
      countedLetters[letter] > maxCount ||
      (countedLetters[letter] === maxCount && letter < maxLetter)
    ) {
      maxLetter = letter;
      maxCount = countedLetters[letter];
    }
  });

  return {
    ...person,
    mostCommonLetter: { letter: maxLetter, count: maxCount },
  };
});

console.log("ZADANIE 3", countingLettersAnalyse);
