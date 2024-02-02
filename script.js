 const openModalButton = document.getElementById('openModal');
  const modal = document.getElementById('myModal');

  openModalButton.addEventListener('click', openModal);

  function openModal() {
    modal.style.display = 'flex';
  }

  window.onclick = function(event) {
    if (event.target === modal) {
      closeModal();
    }
  }

  function closeModal() {
    modal.style.display = 'none';
  }
