/*
Words or Cities game

Your task is to find out if the game ended early, and return a list
that contains every valid string until the mistake.
If a list is empty return an empty list. If one of the elements is an empty string, that is invalid and should be handled.

Examples:

All elements valid:
The array {"dog","goose","elephant","tiger","rhino","orc","cat"}

should return {"dog","goose","elephant","tiger","rhino","orc","cat"}

An invalid element at index 2:
The array {"dog","goose","tiger","cat", "elephant","rhino","orc"}

should return ("dog","goose") since goose ends in 'e' and tiger starts with 't'

An invalid empty string at index 2:
The array {"ab","bc","","cd"}

should return ("ab","bc")

All invalid empty string at index 0:
The array {"","bc","","cd"}

should return An Empty List

 */

function words(words) {
  //insert code
}

// words([]), []
//words(["","","","","",""]), []
// words(["ab","bc","","de","","",""]), ["ab","bc"]