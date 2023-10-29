function findAccountById(accounts, id) {
  let findId = accounts.find((account) => account.id === id);
  return findId;
}
function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
  return accounts;
}
function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0;
  for (let i = 0; i < books.length; i++) {
   for (let j = 0; j < books[i].borrows.length; j++) {
    if (account.id === books[i].borrows[j].id) {
     totalBorrows += 1;
    }
   }
  }
  return totalBorrows;
 }
 

function getBooksPossessedByAccount(account, books, authors) {
  const booksByAccount = books.filter((book) => {
    return book.borrows.some((borrow) => borrow.id === account.id && !borrow.returned);
  });
  const result = booksByAccount.map((book)=>{
    const authorInfo = authors.find((author)=>author.id === book.authorId)
   return {
    ...book,
    author:authorInfo
   }
  })
   return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};