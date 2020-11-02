const User = require('../models/user.js');

const status = require('http-status');

exports.Insert = (req, res, next) => {
    const name = req.body.name;
    const adress = req.body.adress;
    const email = req.body.email;
    const number = req.body.number;

    User.create({
        name: name,
        adress: adress,
        email: email,
        number: number,
    })


        .then(user => {
            if (user) {
                res.status(status.OK).send(user);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};

//select all
exports.SelectAll = (req, res, next) => {
    User.findAll()
        .then(user => {
            if (user) {
                res.status(status.OK).send(user);
            }
        })
        .catch(error => next(error));
}

//select one
exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;

    User.findByPk(id)
        .then(user => {
            if (user) {
                res.status(status.OK).send(user);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};


//update
exports.Update = (req, res, next) => {
    const id = req.params.id;
    const name = req.body.name;
    const adress = req.body.adress;
    const email = req.body.email;
    const number = req.body.number;

    User.findByPk(id)
        .then(user => {
            if (user) {
                user.update({
                    name: name,
                    adress: adress,
                    email: email,
                    number: number
                },
                    {
                        where: { id: id }
                    })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};


//delete
exports.Delete = (req, res, next) => {
    const id = req.params.id;

    User.findByPk(id)
        .then(user => {
            if (user) {
                user.destroy({
                    where: { id: id }
                })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            }
            else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

