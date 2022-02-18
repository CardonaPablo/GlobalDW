let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'EmMDVjZ*436$YV',
    database: 'recipes'
});

connection.connect(function(err) {
    if (err) {
        reject(err)
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});

const getRecipes = async (req, res) => {
    const recipes = await new Promise((resolve, reject) => {


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
    // connection.end()
    res.json(recipes)
}

const login = async (req, res) => {

    const { correo, contrasena } = req.body

    const result = await new Promise((resolve, reject) => {

        let sql = `SELECT * FROM usuarios WHERE correo = "${correo}" AND contrasena = "${contrasena}";`;

        connection.query(sql, (error, results, fields) => {
            if (error) {
                reject(error)
                return console.error(error.message);
            }
            console.log(results);
            if(results.length)
                resolve(true)
                else
                resolve(false)
        });

    })
    // connection.end()
    res.json(result)
}

const getRecipe = async (req, res) => {
    const { id } = req.params; 
    const recipes = await new Promise((resolve, reject) => {

        let sql = `SELECT * FROM recetas WHERE id = ${id}`;

        connection.query(sql, (error, results, fields) => {
            if (error) {
                reject(error)
                return console.error(error.message);
            }
            console.log(results);
            resolve(results)
        });
    })
    // connection.end()
    res.json(recipes.length > 0 ? recipes[0] : [])
}

const updateRecipe = async (req, res) => {

    const { id } = req.params; 
    await new Promise((resolve, reject) => {

        let sql = `UPDATE recetas SET nombre="${req.body.nombre}", descripcion="${req.body.descripcion}", porciones = ${req.body.porciones} WHERE id = ${id}`;

        connection.query(sql, (error, results, fields) => {
            if (error) {
                reject(error)
                return console.error(error.message);
            }
            console.log(results);
            resolve(results)
        });
    })
    // connection.end()
    res.json("Updated")
}

const deleteRecipe = async (req, res) => {
    const { id } = req.params; 
    await new Promise((resolve, reject) => {

        let sql = `DELETE FROM recetas WHERE id = ${id}`;

        connection.query(sql, (error, results, fields) => {
            if (error) {
                reject(error)
                return console.error(error.message);
            }
            console.log(results);
            resolve(results)
        });
    })
    res.json("Deleted")
}

const createRecipe = async (req, res) => {
    await new Promise((resolve, reject) => {

        const { nombre, descripcion, porciones, usuario_id } = req.body
        let sql = `INSERT INTO recetas (nombre, descripcion, porciones, usuario_id) VALUES ("${nombre}", "${descripcion}", ${porciones}, "${usuario_id}")`;

        connection.query(sql, (error, results, fields) => {
            if (error) {
                reject(error)
                return console.error(error.message);
            }
            resolve(results)
        });
    })
    res.json("Created")
}

module.exports = {
    getRecipes,
	login,
    getRecipe,
    updateRecipe,
    deleteRecipe,
    createRecipe
}