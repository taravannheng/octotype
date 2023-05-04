import _ from "lodash";

export const isLetter = (letter: any) => {
  const convertedLetter = _.toString(letter);

  // if length is larger than 1 -> the pressed key is not an alphabet
  // e.g. if TAB key is pressed -> converted to string -> 'TAB' which is more than 1 character
  return convertedLetter !== "" && true && convertedLetter.length === 1;
};

export const calculateAccuracy = (correctLetterTyped: number, totalLetterTyped: number) => {
  return Math.round((correctLetterTyped / totalLetterTyped) * 100); // convert to percentage
}