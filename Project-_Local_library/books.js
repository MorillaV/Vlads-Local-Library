function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function getBorrowersForBook(book, accounts) {
  function findAccountById(id) {
    return accounts.find((account) => account.id === id);
  }

  const borrowed = book.borrows.map((borrow) => {
    const accountInfo = findAccountById(borrow.id);
    accountInfo.returned = borrow.returned;
    return accountInfo;
  }).slice(0, 10);

  return borrowed;
}

module.exports = {
  findAuthorById,
  findBookById,
  getBorrowersForBook,
};
