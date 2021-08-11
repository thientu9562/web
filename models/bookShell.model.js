const sql = require('./db.Model');

//contructor
const bookshell = function (bookshell) {
  this.bsId = bookshell.bsId;
  this.nameBookShell = bookshell.nameBookShell;
  this.count - bookshell.count;
};

//getall
bookshell.getAll = result => {
  sql.query('select * from Bookshell', (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log('Bookshell: ', res);
    result(null, res);
  });
};

//findId
bookshell.findById = (bsId, result) => {
  sql.query(`select * from bookShell where bsId = ${bsId}`, (err, res) => {
    if(err){
      console.log('err: ', err);
      result(null, err);
    }else {
      console.log('findid successfully');
      result(null, res);
    }
  })
}

//create
bookshell.create = ( bookShellReq, result) =>{
  sql.query('insert into bookShell set ?', bookShellReq, (err, res) => {
    if(err){
      console.log('err:',err);
      result(null, err);
    }else {
      console.log('succesfully');
      result(null, res);
    }
  })
}
module.exports = bookshell;