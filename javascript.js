function Book(title, author, numOfPages, readOrNot) {
  this.title = title;
  this.author = author;
  this['number of pages'] = numOfPages;
  this['read or not'] = readOrNot ? 'already read' : 'not read yet';
  this.info = function () {
    return `${this.title} by ${this.author}, ${this['number of pages']} pages, ${this['read or not']}`;
  };
}
