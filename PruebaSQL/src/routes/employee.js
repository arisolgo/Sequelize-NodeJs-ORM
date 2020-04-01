module.exports = app => {
    const Employee = app.db.models.Employee;


    app.get('/Employee/:id', (req, res) => {

        Employee.findById(req.params.id, {
                attributes: ['id', 'firstName', 'lastName', 'salary']
            })
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({ msg: error.message });
            });
    })
    app.post('/Employee', (req, res) => {
        Employee.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({ msg: error.message });
            });
    })

    app.put('/Employee:id', (req, res) => {
            Employee.update(req.body, { where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });

        })
        .delete('Employee:id', (req, res) => {
            Employee.destroy({ where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        });



};