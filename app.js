require('dotenv').config()
let express = require('express');
let cors = require('cors')
let app = express ();
let sequelize = require('./db');

app.use(cors());

let trip = require('./controllers/tripcontroller');
let user = require('./controllers/userController');

sequelize.sync();

app.use(require('./middleware/headers'));
app.use(express.json());

// app.use(require('./middleware/validate-session'));

app.use('/user', user);
app.use('/trip', trip);

app.listen(process.env.PORT, function() {
    console.log(`App is listening on port ${process.env.PORT}`);

})