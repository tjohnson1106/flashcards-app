import { AsyncStorage } from "react-native";

const FLASHCARDS_STORAGE_KEY = "flashcards: decks";

const initialData = {
  Geography: {
    title: "Geography",
    questions: [
      {
        question: "Is South Africa a Country",
        answer: "No it is a region",
        correctAnswer: "false"
      },
      {
        question: "Which US state is next to California",
        answer: "New York",
        correctAnswer: "false"
      }
    ]
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was created",
        correctAnswer: "True"
      },
      {
        question: "What is a variable",
        answer: "Something that stores information",
        correctAnswer: "True"
      }
    ]
  }
};

export const getData = () => {
  return initialData;
};

export function getDecks(deck) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(
    results => {
      if (results === null) {
        AsyncStorage.setItem(
          FLASHCARDS_STORAGE_KEY,
          JSON.stringify(initialData)
        );
        return initialData;
      } else {
        return JSON.parse(results);
      }
    }
  );
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(
    FLASHCARDS_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title: title,
        questions: []
      }
    })
  );
}
