# Mobile Flashcards Project

Mobile Flashcards is a mobile application (Android or iOS - or both) built by React Native that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

### Getting started

To get started developing right away:

* Install all project dependencies with `npm install`
* Start the development server with `npm start`

> Or you can start the project with `expo start` and scan the QR code.
> Since this project is React Native and iOS and/or Android Simulator will need to be configured on the computer.

## App Views

### Deck List View (Default View)
This view is responsible for displaying the title of each Deck, and number of cards in each deck.

### Individual Deck View
This view is responsible for displaying the title of the Deck, the number of cards in the deck, an option to start a quiz on this specific deck, and finally an option to add a new question to the deck.

### Quiz View
This view is responsible for displaying a card question, an option to view the answer (flips the card), a "Correct" button, an "Incorrect" button, the number of cards left in the quiz, and the percentage correct once the quiz is complete.

### New Deck View
This view is responsible for displaying an option to enter in the title for the new deck, and an option to submit the new deck title.

### New Question View
This view is responsible for displaying an option to enter in the question, an option to enter in the answer, and an option to submit the new question.