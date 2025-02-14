// वीडियो को चलाएं और रोकें
const video = document.querySelector('video');
const playButton = document.createElement('button');
playButton.textContent = 'Play';
video.parentNode.insertBefore(playButton, video.nextSibling);

playButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playButton.textContent = 'Pause';
  } else {
    video.pause();
    playButton.textContent = 'Play';
  }
});

// उपयोगकर्ता को संपर्क फ़ॉर्म भरने के लिए अनुमति दें
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('आपका संदेश सफलतापूर्वक भेज दिया गया है।');
});
