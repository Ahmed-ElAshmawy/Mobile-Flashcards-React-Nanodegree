import { AsyncStorage } from "react-native";

export const Mobile_FLASHCARD_STORAGE_KEY = "Udacity:MobileFlashCards";

export const getAllDecks = async () => {
  const results = await AsyncStorage.getItem(Mobile_FLASHCARD_STORAGE_KEY);
  const data = JSON.parse(results);
  return data;
};

export const saveDeck = deck => {
  return AsyncStorage.mergeItem(
    Mobile_FLASHCARD_STORAGE_KEY,
    JSON.stringify({ [deck.id]: deck })
  );
};

export const saveCard = async (deckId, card) => {
  const results = await AsyncStorage.getItem(Mobile_FLASHCARD_STORAGE_KEY);
  const data = JSON.parse(results);
  data[deckId] = {
    ...data[deckId],
    cards: [
      ...data[deckId].cards,
      { question: card.question, answer: card.answer }
    ]
  };
  AsyncStorage.setItem(Mobile_FLASHCARD_STORAGE_KEY, JSON.stringify(data));
};
