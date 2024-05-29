const uppercasedFirstLetter = (string) => {
  const firstLetter = string[0];
  const restOfString = string.slice(1);

  return firstLetter.toUpperCase() + restOfString;
};

export default uppercasedFirstLetter;
