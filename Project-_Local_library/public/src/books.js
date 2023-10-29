function findAuthorById(authors, id) {
  let findId = authors.find((author) => author.id === id);
  return findId;
}

function findBookById(books, id) {
  let findBook = books.find((book) => book.id === id);
  return findBook;
}

function partitionBooksByBorrowedStatus(books) {
  const returnedBooks = books.filter((book) => {
  return book.borrows.every((borrow) => borrow.returned === true);
  });
 const booksBorrowed = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
 );
  const result = [[...booksBorrowed], [...returnedBooks]];
  return result
}

function getBorrowersForBook(book, accounts) {
  let borrowed= book.borrows.map((borrow) => {
    let accountInfo = findAuthorById(accounts, borrow.id);
      accountInfo.returned = borrow.returned;
  return accountInfo;
  }).slice(0, 10);
return borrowed;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
