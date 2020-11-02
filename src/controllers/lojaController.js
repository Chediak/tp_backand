const Product = require('../models/product.js');

const status = require('http-status');

exports.Insert = (req, res, next) => {
    const name = req.body.name;
    const costprice = req.body.costprice;
    const costsell = req.body.costsell;
    const stockamout = req.body.stockamout;

    Product.create({
        name: name,
        costprice: costprice,
        costsell: costsell,
        stockamout: stockamout,
    })


        .then(product => {
            if (product) {
                res.status(status.OK).send(product);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};

//select all
exports.SelectAll = (req, res, next) => {
    Product.findAll()
        .then(product => {
            if (product) {
                res.status(status.OK).send(product);
            }
        })
        .catch(error => next(error));
}

//select one
exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;

    Product.findByPk(id)
        .then(product => {
            if (product) {
                res.status(status.OK).send(product);
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
    const costprice = req.body.costprice;
    const costsell = req.body.costsell;
    const stockamout = req.body.stockamout;

    Product.findByPk(id)
        .then(product => {
            if (product) {
                product.update({
                    name: name,
                    costprice: costprice,
                    costsell: costsell,
                    stockamout: stockamout
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

    Product.findByPk(id)
        .then(product => {
            if (product) {
                product.destroy({
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

