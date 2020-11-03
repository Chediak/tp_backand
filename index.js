const http = require('http');
const express = require('express');
const status = require('http-status');
const sequelize = require('./src/database/database');
const app = express();
const routes = require('./src/routes/routes.js');
var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'http://localhost:8888'}));
 
app.use(express.json());
 
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

