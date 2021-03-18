
document.addEventListener('DOMContentLoaded', () => {
  
  const form = document.getElementById('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const entryElement = document.getElementById('entry').value;
    const lastMessageElement = document.getElementById('last-message');

    if (! entryElement) alert('entrada vacia'); 

    // clear input
    document.getElementById('entry').value = '';

    lastMessageElement.innerHTML = entryElement;
  })
})
