

module.exports = app => {
    let db = require('../models/phone')
    console.log(db);
    const Phone = app.db.models.Phone;
    console.log(Phone);
    

    app.get('/phone/:id', (req, res) => {

        Phone.findByPk(req.params.id, {
                attributes: ['id', 'type', 'phoneNumber', 'areaCode','ownerId']
            })
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({ msg: error.message });
            });
    })

    app.get('/phone', (req, res) => {
        Phone.findAll({})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })



    app.post('/phone', (req, res) => {
        Phone.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({ msg: error.message });
            });
    })

    app.put('/phone/:id', (req, res) => {
        Phone.update(req.body, { where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });

        })
        .delete('/phone/:id', (req, res) => {
            Phone.destroy({ where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        });



};