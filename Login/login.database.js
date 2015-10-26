/*var pg = require('pg');
var conString = "postgres://usrSegundoProyecto:12345@172.24.28.21:5433/SegundoProyecto";
//var conString = "postgres://username:password@localhost/database";

//this initializes a connection pool
//it will keep idle connections open for a (configurable) 30 seconds
//and set a limit of 20 (also configurable)
pg.connect(conString, function(err, client, done) {
	if(err) {
		return console.error('error fetching client from pool', err);
	}
	client.query('SELECT $1::int AS number', ['1'], function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  	return console.error('error running query', err);
		}
		console.log(result.rows[0].number);
		//output: 1
	});
});*/

var pg = require('pg-promise')(/*options*/);
var conString = "postgres://usrSegundoProyecto:12345@172.24.28.21:5433/SegundoProyecto";

var db = pg(conString); // database instance;

// select and return user name from id:
db.one("select name from users where id=$1", 123)
    .then(function (user) {
        console.log(user.name); // print user name;
    }, function (reason) {
        console.log(reason); // print why failed;
    });