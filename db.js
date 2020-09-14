require('dotenv').config();
const Sequelize = require('sequelize');

<<<<<<< HEAD
const sequelize = new Sequelize(process.env.DATABASE_URL,{
=======
const sequelize = new Sequelize(process.env.DATABASE_URL, { 
>>>>>>> 0a670fd3b47807e70bd35f63c03f33360bf63bf5
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to tripp-it database');
    },
    function(err){
        console.log(err);
    }
);

module.exports = sequelize