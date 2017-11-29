function position(word){
  var string = word.split(" ").join("");
  var counter = {};
  //for (var letter in string){
    for (var i = 0; i < string.length; i++){
    letter = string[i];
    // console.log("current working with letter: " + letter);
      if (counter[letter] === undefined){
        counter[letter] = 0;
      }
      counter[letter] += 1;
  }
  console.log(counter);
}

position("lighthouse in the house");

// iterate through the word for unique letters
// if the value is < 1, than create a new value
// else create a value of 0
// if the letter is unique, then assign it as a key with value of 1
//     if not unique