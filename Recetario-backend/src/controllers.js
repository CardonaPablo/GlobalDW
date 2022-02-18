let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'EmMDVjZ*436$YV',
    database: 'recipes'
});

const login = async (req, res) => {
    const recipes = await new Promise((resolve, reject) => {
        connection.connect(function(err) {
            if (err) {
                reject(err)
                return console.error('error: ' + err.message);
            }

            console.log('Connected to the MySQL server.');
        });

        let sql = `SELECT * FROM recetas`;

        connection.query(sql, (error, results, fields) => {
            if (error) {
                reject(error)
                return console.error(error.message);
            }
            console.log(results);
            resolve(results)
        });
    })
    res.json(recipes)
}

module.exports = {
	login
}