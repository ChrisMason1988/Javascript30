//Adding an eventListener that looks for a key being pressed "keydown". When that happens a function is called and the info about which key was pressed
//is passed into the function using the "event" variable.
window.addEventListener ("keydown", function(event)  {
  //Set up a string that will look for an audio element in html file which has matching keyCode.
  var whichAudio = 'audio[data-key="' + event.keyCode + '"]';
  //The querySelector uses the above string to look for the matching audio file in the html file.
  var audio = document.querySelector(whichAudio);
  //If we dont find a match then the variable "audio" will be undefined and "return" exits the function without anything else happening.
  if (!audio) return;
  //If a sound is currently playing, then a currentTime of 0 sets it back to the start of the sound.
  audio.currentTime = 0;
  //This plays the matching sound file that is in the html.
  audio.play ();
  //Set up a string that will look for a key class in html file which has matching keyCode.
  var whichKey = '.key[data-key="' + event.keyCode + '"]';
  //The querySelector uses the above string to look for the matching key class in the html file.
  var key = document.querySelector (whichKey);
  //Add a class of "playing" to the key. This is in the css and changes the appearance. Elements can have one or more classes associated with them, hence "classList.add"
  key.classList.add ('playing');
})
//Look for all elements in html with the class "key". The list of all the key elements will be stored in the "keys" variable.
var keys = document.querySelectorAll('.key');
//The forEach function loops through the list of "key" elements in html.
keys.forEach(function(key) {
  //For each "key" element we add a 'transitionend' listener.
  key.addEventListener('transitionend', function() {
    //When the transition ends the "playing" class is removed from the current key.
    key.classList.remove ('playing');
  });
});
