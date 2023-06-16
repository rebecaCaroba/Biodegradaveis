
let utterance;

function speakText() {
    const text = document.querySelector('#texta');
    const textDiv = text.innerText;

  if (utterance && !utterance.paused) {
    // Se já estiver falando, não faça nada
    return;
  }

  utterance = new SpeechSynthesisUtterance(textDiv);
  speechSynthesis.speak(utterance);
}

function stopText() {
  if (utterance) {
    // Se houver uma fala em andamento, pare a fala
    speechSynthesis.cancel();
  }
}


// function speakText() {
//     const text = document.querySelector('#texta');
//     const textDiv = text.innerText;
    
//     let utterance = new
//     SpeechSynthesisUtterance(textDiv);
//     speechSynthesis.speak(utterance)

// }

function toggleMenu() {
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active')
    
}
