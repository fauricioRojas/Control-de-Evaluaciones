var pg = require("pg");
var conString = "postgres://usrSegundoProyecto:12345@172.24.28.21:5433/SegundoProyecto";

var query = "SELECT cedula, contraseña, tipo FROM usuarios where cedula=$1 AND contraseña=$2";

pg.connect(conString, function(err, client, done) {
	if (err) {
	  	return console.error('Could not connect to postgres -> ', err);
	}
	client.query(query, ['2-0562-0727', '12345'], function(err, result) {
	  	done();
	  	if (err) {
	     	return console.error('error running query', err);
	  	}
	  	console.log(JSON.stringify(result.rows, null, "   "));
	});
	client.end();
});