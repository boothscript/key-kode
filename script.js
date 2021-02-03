document.addEventListener('keydown', displayKey);

function displayKey(event) {
  // hide welcome message
  document.querySelector('#waiting-message').style.display = 'none';
  document.querySelector('#app-container').style.display = 'block';
  // populate fields

  document.querySelector('#keycode').innerHTML = event.keyCode;
  document.querySelector('#event-code p.info-value').innerHTML = event.code;
  document.querySelector('#event-key p.info-value').innerHTML = event.key;
  document.querySelector('#event-which p.info-value').innerHTML = event.which;
}
