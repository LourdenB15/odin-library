const input = document.querySelectorAll('.info');
const submit = document.querySelector('[type="submit"]');
const status = document.querySelector('#status');
const shelf = document.querySelector('#shelf');

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read !== '0';
  this.index = 0;
}

const myLibrary = [];

function addBookToLibrary() {
  const [title, author, read] = Array.from(input);
  const newBook = new Book(title.value, author.value, read.value);
  newBook.index = myLibrary.length;
  myLibrary.push(newBook);
  return newBook;
}

submit.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
  shelf.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    createBox(myLibrary[i]);
  }
});

function createBox(book) {
  const box = document.createElement('div');
  box.classList.add('box');
  for (let i = 1; i <= 4; i++) {
    const para = document.createElement('p');
    let paraText;
    switch (i) {
      case 1:
        paraText = 'Title';
        break;
      case 2:
        paraText = book.title;
        break;
      case 3:
        paraText = 'Author';
        break;
      case 4:
        paraText = book.author;
        break;
      default:
        return;
    }
    para.textContent = paraText;
    box.append(para);
  }
  const btnDiv = document.createElement('div');
  for (let i = 1; i <= 2; i++) {
    let paraText;
    const btn = document.createElement('button');
    switch (i) {
      case 1:
        if (book.read) paraText = 'Read';
        else {
          paraText = 'Not<br>Read';
          btn.classList.add('not-read');
        }
        btn.classList.add('status');
        btn.addEventListener('click', () => {
          btn.classList.toggle('not-read');
          if (btn.innerHTML === 'Not<br>Read') btn.innerHTML = 'Read';
          else btn.innerHTML = 'Not<br>Read';
          if (!book.read) book.read = true;
          else book.read = false;
        });
        break;
      case 2:
        paraText = 'Delete';
        btn.classList.add('delete');
        btn.addEventListener('click', () => {
          myLibrary.splice(book.index, 1);
          shelf.innerHTML = '';
          for (let i = 0; i < myLibrary.length; i++) {
            createBox(myLibrary[i]);
            myLibrary[i].index = i;
          }
        });
        break;
      default:
        return;
    }
    btn.innerHTML = paraText;
    btnDiv.appendChild(btn);
  }
  box.appendChild(btnDiv);
  shelf.appendChild(box);
}

function changeColor(e) {
  if (status.value === '1') {
    e.classList.remove('not-read');
    e.innerHTML = 'Read';
  } else {
    e.classList.add('not-read');
    e.innerHTML = 'Not<br>Read';
  }
}

function changeStatus() {
  if (status.value === '0') {
    status.value = 1;
    changeColor(this);
  } else {
    status.value = 0;
    changeColor(this);
  }
}

status.addEventListener('click', changeStatus);

const overlay = document.querySelectorAll('.overlay-toggle');
function overlayToggle() {
  overlay.forEach((e) => {
    if (!e.classList.contains('circle')) {
      e.classList.toggle('pop-up');
    }
  });
}
overlay.forEach((e) => {
  if (!e.classList.contains('form')) {
    e.addEventListener('click', overlayToggle);
  }
});
