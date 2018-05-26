'use strict';

const socket = io();

const outputYou = document.querySelector('.output-you');
const outputBot = document.querySelector('.output-bot');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;
Webcam.attach( '#my_camera' );
document.querySelector('button').addEventListener('click', () => {
  recognition.start();
});

recognition.addEventListener('speechstart', () => {
  console.log('Speech has been detected.');
});

recognition.addEventListener('result', (e) => {
  console.log('Result has been detected.');

  let last = e.results.length - 1;
  let text = e.results[last][0].transcript;

  outputYou.textContent = text;
  console.log('Confidence: ' + e.results[0][0].confidence);

  socket.emit('chat message', text);
});

recognition.addEventListener('speechend', () => {
  recognition.stop();
});

recognition.addEventListener('error', (e) => {
  outputBot.textContent = 'Error: ' + e.error;
});

function synthVoice(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  synth.speak(utterance);
}

function takePicture(){
    console.log("In take picture")
      Webcam.snap( function(data_uri) {
        document.getElementById('my_result').innerHTML = '<img src="'+data_uri+'"/>';
      } );
      console.log("Picture Taken")
}

socket.on('bot reply', function(replyText) {
  synthVoice(replyText);
  if(replyText == 'Okay taking a picture') { 
      takePicture();
  }
  if(replyText == '') replyText = '(No answer...)';
  outputBot.textContent = replyText;
});
