function getTotalBooksCount(books) {
return books.length 
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
 let booksBorrowed = books.filter(
  (book) =>
   book.borrows.filter((record) => record.returned === false).length > 0
 );
 return booksBorrowed.length;
}

function getMostCommonGenres(books) {
 let mostCommon = {};
 books.forEach((number) => {
  if (mostCommon[number.genre]) {
   mostCommon[number.genre]++;
  } else {
  mostCommon[number.genre] = 1;
  }
 });
 return Object.entries(mostCommon)
  .map(([name, count]) => {
   return {
    name,
    count
   };
  })
  .sort((a, b) => b.count - a.count)
  .slice(0, 5);
}

function getMostPopularBooks(books) {
 return books
  .map((book) => {
   return { name: book.title, count: book.borrows.length };
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
 let result = [];
 authors.forEach((author) => {
  let writer = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    writer.count += book.borrows.length;
   }
  });
  result.push(writer);
 });
 return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
