function position(word){
  var string = word.split(" ").join("");
  var counter = {};
    for (var i = 0; i < string.length; i++){
    letter = string[i];
    // console.log("current working with letter: " + letter);
      if (counter[letter] === undefined){
        counter[letter] = [];
      }
      counter[letter].push(i);
  }
  console.log(counter);
}

position("lighthouse in the house");

/*
if key property doesn't exist - create it


l: 1, 2, 3
i:
g:
h:
t:

*/