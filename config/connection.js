const mysql = require("mysql");
var db

class Database {
    constructor( config ) {
        this.connection = mysql.createConnection( config );
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
  
  if( process.env.JAWSDB_URL ){
    //   db = mysql.createConnection( process.env.JAWSDB_URL )
    db = new Database({
        host: "hngomrlb3vfq3jcr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: 'uqjf7zu43yjupbyq',
        password: 's4r02d5jjsk0zurm',
        database: 'mjohl0f68bqcvdh3'
    })
  }else{
      db = new Database({
        host: "localhost",
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME,
        insecureAuth : true
      })
  }

  module.exports = db