const connection = require('./connection.js');

const orm = {
    selectAll(tableInput, cb){
        connection.query(`SELECT * FROM ${tableInput}`, (err, result) => {
            if (err) throw err;
            cb (result);
        })
    },
    // insertOne should be fine...I think?
    insertOne(tableInput, burgerName, cb){
        let queryString = `INSERT INTO ${tableInput}`;

        queryString += ' (burger_name, devoured)';
        queryString += 'VALUES (?, false)';

        console.log(queryString);

        connection.query(queryString, burgerName.toString(), (err, result) => {
                if (err) throw err;
                cb(result);
                console.log('Burger successfully added!');
            }
        )
    },
    // updateOne() seems to be good to go. Check back later and delete
    // comment if it's good to go
    updateOne(table, devourVal, condition, cb){
        let queryString = `UPDATE ${table}`;
        queryString += ' SET devoured=';
        queryString += devourVal;
        queryString += " WHERE "
        queryString += condition;

        connection.query(
            queryString, (err, result) => {
                if (err) throw err;
                cb(result);
            }
        )
    }
}

// Helper Functions

// Helper function for SQL syntax to add question marks (?, ?, ?) in query
const printQuestionMarks = (num) => {
    const arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push('?');
    }
  
    return arr.toString();
  };
  
  // Helper function to convert object key/value pairs to SQL syntax
const objToSql = (ob) => {
    const arr = [];
  
    // Loop through the keys and push the key/value as a string int arr
    for (const key in ob) {
      let value = ob[key];
      // Check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // If string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === 'string' && value.indexOf(' ') >= 0) {
          value = `'${value}'`;
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(`${key}=${value}`);
      }
    }
  
    // Translate array of strings to a single comma-separated string
    return arr.toString();
};

module.exports = orm;