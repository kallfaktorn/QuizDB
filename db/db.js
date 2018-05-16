const mysql = require( 'mysql' );
const dbconfig = require('../config/database');

class Database {
  constructor( config ) {
    this.connection = mysql.createConnection( dbconfig.connection );
    this.connection.connect(function(err) {
      if (err) throw err;
    });
    this.connection.query('USE ' + dbconfig.database);
  }
  query( sql, args ) {
    return new Promise( ( resolve, reject ) => {
      this.connection.query( sql, args, ( err, rows ) => {
        if ( err )
          return reject( err );
        resolve( rows );
      } );
    } );
  }
  close() {
    return new Promise( ( resolve, reject ) => {
      this.connection.end( err => {
        if ( err )
          return reject( err );
        resolve();
      } );
    } );
  }
}

module.exports = Database;
