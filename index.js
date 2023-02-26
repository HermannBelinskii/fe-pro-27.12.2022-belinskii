const btn = document.querySelector('.button');
const firstBtnForAdd = document.querySelector('#first-btn')
const secondBtnForRemove = document.querySelector('#second-btn')
const blockWithBtn = document.querySelector('.main-block')
function createnote() {
  const note = document.createElement("div")
  const info = prompt('Enter text:')
  note.classList.add('note')
  note.innerHTML = `<p>${info}</p>`;
  note.addEventListener('click', function (e) {
  this.classList.toggle('note-cg-bg');
});
  return note
}


firstBtnForAdd.addEventListener('click', function() {
  blockWithBtn.appendChild(createnote());
});

secondBtnForRemove.addEventListener('click', function() {
  const notes = document.querySelectorAll('.note');
  if (notes.length > 0) {
    const lastNote = notes[notes.length - 1];
    lastNote.remove();
  }
});
