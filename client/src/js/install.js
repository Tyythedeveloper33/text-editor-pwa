const buttonInstall = document.getElementById('buttonInstall');
console.log(" buttonInstall:", buttonInstall)

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  //  event.preventDefault();
  window.deferredPrompt = event;
  buttonInstall.style.visibility = 'visible';
  // textHeader.textContent = 'Click the button to install!';
});
  

  // TODO: Implement a click event handler on the `buttonInstall` element
buttonInstall.addEventListener('click',() => {
  console.log("im the install btn")
    if (window.deferredPrompt) {
      window.deferredPrompt.prompt();
      window.deferredPrompt = null;
      buttonInstall.setAttribute('disabled', true);
      buttonInstall.textContent = 'Installed!';
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // textHeader.textContent = 'Successfully installed!';
  console.log('👍', 'appinstalled', event);
  window.deferredPrompt = null;
});