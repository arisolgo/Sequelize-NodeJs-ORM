

module.exports = app => {
    var db = require('../models/employee')
    console.log(db);
    const Employee = app.db.models.Employee;
    console.log(Employee);
    

    app.get('/Employee', (req, res) => {

        Employee.findByPk(req.params.id, {
                attributes: ['id', 'firstName', 'lastName', 'salary',"startDate","endDate","managerId","addressId"]
            })
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({ msg: error.message });
            });
    })
    app.post('/Employee', (req, res) => {
       db.Employee.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({ msg: error.message });
            });
    })

    app.put('/Employee/:id', (req, res) => {
            Employee.update(req.body, { where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });

        })
        .delete('Employee/:id', (req, res) => {
            Employee.destroy({ where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        });



};