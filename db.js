const mysql = require('mysql');

// MySQL database configuration
const db = mysql.createConnection({
DB_HOST=141.94.50.209
DB_USER=userdbds3
DB_PASSWORD=O$c@rm!kEJul303
DB_DATABASE=dbds3
DB_PORT=3306
DB_USER1=authenticator
DB_PASSWORD1=O$c@rm!kEJul909
DB_DATABASE1=UserAuth

  });
  

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    throw err;
  }
  console.log('Connected to MySQL');
});

//create table

const createTableSQL = `
CREATE TABLE IF NOT EXISTS axitable (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255),
  ip VARCHAR(255) NOT NULL,
  useragent VARCHAR(255) NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)
`;
  
  db.query(createTableSQL, (err, result) => {
if (err) {
  console.error('Error creating table:', err);
} else {
  console.log('Table created successfully');
}
});


module.exports = db;
