function Book(title, author, readOrNot) {
  this.title = title;
  this.author = author;
  this['read or not'] = readOrNot ? 'already read' : 'not read yet';
}
Book.prototype.textTitle = 'Title';
Book.prototype.textAuthor = 'Author';

const input = document.querySelectorAll('.info');
const submit = document.querySelector('[type="submit"]');
const status = document.querySelector('#status');

const shelf = document.querySelector('#shelf');

function createBox(x) {
  const box = document.createElement('div');
  box.classList.add('box');
  for (let i = 1; i <= 4; i++) {
    const para = document.createElement('p');
    let paraText;
    switch (i) {
      case 1:
        paraText = x.textTitle;
        break;
      case 2:
        paraText = x.title;
        break;
      case 3:
        paraText = x.textAuthor;
        break;
      case 4:
        paraText = x.author;
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
        if (status.value === '1') paraText = 'Read';
        else {
          paraText = 'Not<br>Read';
          btn.classList.add('not-read');
        }
        btn.classList.add('status');
        btn.addEventListener('click', () => {
          btn.classList.toggle('not-read');
          if (btn.innerHTML === 'Not<br>Read') btn.innerHTML = 'Read';
          else btn.innerHTML = 'Not<br>Read';
        });

        break;
      case 2:
        paraText = 'Delete';
        btn.classList.add('delete');
        btn.addEventListener('click', () => {
          box.remove();
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
function overlayToggle() {
  overlay.forEach((e) => {
    if (!e.classList.contains('circle')) {
      e.classList.toggle('pop-up');
    }
  });
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
submit.addEventListener('click', (e) => {
  e.preventDefault();
  const [title, author, bookStatus] = Array.from(input);
  const newBook = new Book(title.value, author.value, bookStatus.value);
  createBox(newBook);
});
status.addEventListener('click', changeStatus);

const overlay = document.querySelectorAll('.overlay-toggle');

overlay.forEach((e) => {
  if (!e.classList.contains('form')) {
    e.addEventListener('click', overlayToggle);
  }
});
