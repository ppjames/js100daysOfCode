
document.addEventListener('DOMContentLoaded', () => {
  
  const form = document.getElementById('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const entryElement = document.getElementById('entry').value;
    const lastMessageElement = document.getElementById('last-message');

    if (! entryElement) {
      console.log(">>> 1");
      let alert = document.createElement('div');
      alert.className = 'show';
      alert.innerHTML = `Entrada vacia`;
      document.querySelector('.box-content').append(alert);

      setTimeout(() => alert.remove(), 2000);
    }
    // clear input
    document.getElementById('entry').value = '';

    lastMessageElement.innerHTML = entryElement;
  })
})
