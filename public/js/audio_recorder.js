var speakBtn = document.getElementById('getVoiceButton');
var button_area = document.getElementsByClassName("button_area")[0];
var voices = [];
var choicedVoice;
var synthes = new SpeechSynthesisUtterance();
var getVoiceFrag = true;
var word;

console.log("word: " + word)

init();

function init() {
  getVoices()
  setVoice()
}

speakBtn.addEventListener('click', function(){
  synthes.volume = 5;
  synthes.text = word;
  synthes.lang = 'en-US';

  getVoices()
  synthes.voice = voices[61]
  speechSynthesis.speak(synthes);
}, false);

function getVoices() {
  voices = speechSynthesis.getVoices();  
  if (getVoiceFrag == false) {
    $(".button_area").children().remove();
  }

  for (var i = 0; i < voices.length; i++) {
    var buttons = document.createElement("div")  
    var button = document.createElement("button")
    button.className = "voice_button btn btn-primary"
    button.innerHTML = voices[i].name
    buttons.appendChild(button)
    button_area.appendChild(buttons)
  }

  getVoiceFrag = false;

  if (document.getElementsByClassName("voice_button")[0]) {
    var voice_button = document.getElementsByClassName("voice_button")

    for (var j = 0; j < voice_button.length; j++) {      
      voice_button[j].addEventListener("click", function(){
        console.log(this)
        console.log(this.innerHTML)
        choicedVoice = this.innerHTML

        for (var k = 0; k < voices.length; k++) {
          if (voices[k].name == choicedVoice) {
            synthes.voice = voices[k]
            word = document.getElementsByName("sayWord")[0].value
            synthes.text = word;
            speechSynthesis.speak(synthes);
          }
        }
      })
    }
  }
}


function setVoice() {
  console.log(document.getElementsByClassName("voice_button")[0])
  if (document.getElementsByClassName("voice_button")[0]) {
    var voice_button = document.getElementsByClassName("voice_button")[0];  
    voice_button.addEventListener("click", function(e){
      console.log(e)
    })  
  }
}