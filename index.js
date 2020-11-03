const http = require('http');
const express = require('express');
const status = require('http-status');
const sequelize = require('./src/database/database');
const app = express();
const routes = require('./src/routes/routes.js');
const cors = require('cors');

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
 
app.use(express.json());
 
app.use(cors());
 
app.use('/laloja', routes);
 
app.use((req, res, next) => {
    res.status.apply(status.NOT_FOUND).send("Page not found");
});
 
app.use((req, res, next) => {
    res.status.apply(status.INTERNAL_SERVER_ERROR).json({ error });
});
 
sequelize.sync({ force: false }).then(() => {
    const port = 3003;
    app.set("port", process.env.PORT || port);
    const server = http.createServer(app);
    server.listen(process.env.PORT || port);
});

