// Variables
const openBtn = document.getElementById('open-btn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');
const modalContainer = document.getElementById('modal-container')

// Event Listeners 
openBtn.addEventListener('click', function() {
    modalContainer.style.display = 'block';
})

closeBtn.addEventListener('click', function() {
    modalContainer.style.display = 'none';
})

window.addEventListener('click', function(e){
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
})