const sql = require ('./db.Model');

//contructor
const home = function (book) {
  this.bookId = book.bookId;
  this.bookName = book.bookName;
  this.bsId = book.bsId;
  this.price = book.price;
  this.countBook = book.countBook;
}

// findall for homepage
home.getAll= result => {
  sql.query('select bookName, price from Book', (err,res) => {
    if (err) {
      console.log ('err: ', err);
      result(null,err);
      return;
    }
    console.log ('book: ', res);
    result(null, res);
  });
};

module.exports = home;