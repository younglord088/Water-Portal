const mysql = require('mysql');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',    // Use the MySQL username
  password: 'yash@123', // Use the MySQL password
  database: 'power_portal'    // Use the name of your database
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);
}
);

// module.exports = connection;
// import mysql from 'mysql2/promise';

// const db = mysql.createPool({
//   host: 'localhost',
//   user: 'root',    // Use the MySQL username
//   password: 'yash@123', // Use the MySQL password
//   database: 'power_portal'    // Use the name of your database
// });

export default connection;