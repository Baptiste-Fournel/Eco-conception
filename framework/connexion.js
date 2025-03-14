const Sequelize = require('sequelize');

let bdd = new Sequelize("eco-conception2", "root", "", {
    dialect: "mysql",
    host: "localhost"
})

let connect = async () => {
    try {
        await bdd.authenticate();
        console.log("Connexion à la base de données réussie !");
    } catch (error) {
        console.error("Impossible de se connecter à la base de données :", error);
    }
}

module.exports = {connect, bdd};