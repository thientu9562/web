const mysql = require('mysql');
const dbCongig = require('../config/mysql');

//tạo mới connecttion
const connection = mysql.createConnection( {
  host: dbCongig.HOST,
  user: dbCongig.USER,
  password: dbCongig.PASSWORD,
  database: dbCongig.DB
})

//mở kết nối sql
connection.connect( err => {
  if (err) throw err;
  console.log('successfully connection!!');
  }
);

module.exports = connection;