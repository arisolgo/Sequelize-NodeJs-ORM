

module.exports = app => {
    let db = require('../models/address')
    console.log(db);
    const Address = app.db.models.Address;
    console.log(Address);
    

    app.get('/address/:id', (req, res) => {

        Address.findByPk(req.params.id, {
                attributes: ['id', 'street', 'city', 'province','country','postcode']
            })
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({ msg: error.message });
            });
    })

    app.get('/address', (req, res) => {
        Address.findAll({})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })



    app.post('/address', (req, res) => {
        Address.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({ msg: error.message });
            });
    })

    app.put('/address/:id', (req, res) => {
        Address.update(req.body, { where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });

        })
        .delete('address/:id', (req, res) => {
            Address.destroy({ where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        });



};