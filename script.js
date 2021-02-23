let text = ['Be Smarter About \'Local\' In 5 Minutes', 'Your Local News In Your Inbox', 'Build A New Habit This 2021']

count = 0;
index = 0;
currtext = 0;
(function type(){
  if(count === text.length){
    count = 0
  }
  currtext = text[count]
  letter = currtext.slice(0, ++index);

  document.querySelector('.letter').innerHTML = letter;
  if (letter.length  === currtext.length){
    count ++;
    index= 0;
  }

  setTimeout(type, 100)
})();