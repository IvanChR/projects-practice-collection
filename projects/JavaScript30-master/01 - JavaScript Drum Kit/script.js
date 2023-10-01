

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // detiene la ejecucion de la función 
    audio.currentTime = 0; //reinicia el sonido
    audio.play();
    key.classList.add('playing');

}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // Se salta si no es la propiedad transform
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);