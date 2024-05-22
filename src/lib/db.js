const mysql = require('mysql');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',    // Use the MySQL username
  password: 'yash@123', // Use the MySQL password
  database: 'power_portal'    // Use the name of your database
});




export default connection;