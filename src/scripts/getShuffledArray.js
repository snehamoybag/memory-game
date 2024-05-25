/* Randomize array in-place using Durstenfeld shuffle algorithm */
const getShuffledArray = (array) => {
  const shuffledArray = array.slice(); // copy of the original array

  for (let i = array.length - 1; i > 0; i -= 1) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = temp;
  }

  return shuffledArray;
};

export default getShuffledArray;
