

module.exports = app => {
    let db = require('../models/employee')
    console.log(db);
    const Employee = app.db.models.Employee;
    console.log(Employee);
    

    app.get('/employee', (req, res) => {

        Employee.findByPk(req.params.id, {
                attributes: ['id', 'firstName', 'lastName', 'salary','startDate','endDate','managerId','addressId']
            })
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({ msg: error.message });
               
            });
    })
    app.post('/employee', (req, res) => {
       Employee.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({ msg: error.message });
                console.log(error);
            });
    })

    app.put('/employee/:id', (req, res) => {
            Employee.update(req.body, { where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });

        })
        .delete('employee/:id', (req, res) => {
            Employee.destroy({ where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        });



};