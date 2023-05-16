function Book(title, author, numOfPages, readOrNot) {
  this.title = title;
  this.author = author;
  this['number of pages'] = numOfPages;
  this['read or not'] = readOrNot ? 'already read' : 'not read yet';
  this.info = function () {
    return `${this.title} by ${this.author}, ${this['number of pages']} pages, ${this['read or not']}`;
  };
}

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
const input = document.querySelectorAll('[required]');
const submit = document.querySelector('[type="submit"]');

function test(e) {
  const [title, author] = input.forEach((r) => r.value);
}
submit.addEventListener('click', (e) => {
  e.preventDefault();
  test();
});

// input field
