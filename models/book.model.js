const { update } = require('../controllers/bookController');
const sql = require('./db.Model');

//contructor
const book = function (book) {
  this.bookId = book.bookId;
  this.bookName = book.bookName;
  this.bsId = book.bsId;
  this.price = book.price;
  this.countBook = book.countBook;
};

//create
book.create = (bookReqData, result) => {
  sql.query("INSERT INTO Book SET ?", bookReqData, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null,err);
      return;
    }else { 
    console.log('create book successfully');
    result(null, res);
    return;
    }
  });
};

//findId
book.findById = (bookId, result) => {
  sql.query(`SELECT * FROM Book WHERE bookId = ${bookId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Book: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found  with the id
    result({ kind: "not_found" }, null);
  });
};

//getall
book.getAll = result => {
  sql.query("SELECT * FROM Book", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Book: ", res);
    result(null, res);
  });
};

 
//update
book.update = (bookId, bookReqData, result) =>{
  sql.query('UPDATE Book SET bookName = ?, bsId =?, price =?, countBook =? WHERE bookId =?', 
  [bookReqData.bookName, bookReqData.bsId, bookReqData.price, bookReqData.countBook,bookId],
  (err, res) => {
    if(err){
      console.log('err: ', err);
      result(null, err);
    }else {
      console.log('updated successfully');
      result(null,res);
    }
  });
};

//delete
book.delete = (bookId, result) => {
  sql.query(`DELETE FROM Book WHERE bookId = ${bookId}`, (err, res) => {
    if (err) {
      console.log('err: ', err);
      result(null, err);
    }else {
      console.log('Deleted successfully');
      result(null, res);
    }
  })
}









// book.updateById = (bookId, book, result) => {
//   sql.query(
//     "UPDATE Book SET bookName = ?, price = ? WHERE bookId = ?",
//     [book.bookName, book.price, bookId],
//     (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }

//       if (res.affectedRows == 0) {
//         // not found book with the id
//         result({ kind: "not_found" }, null);
//         return;
//       }

//       console.log("updated book: ", { id: bookId, ...book });
//       result(null, { id: bookId, ...book });
//     }
//   );
// };


// // delete
// book.remove = (bookId, result) => {
//   sql.query("DELETE FROM Book WHERE bookId = ?", bookId, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     if (res.affectedRows == 0) {
//       // not found book with the id
//       result({ kind: "not_found" }, null);
//       return;
//     }

//     console.log("deleted book with id: ", bookId);
//     result(null, res);
//   });
// };

module.exports = book;