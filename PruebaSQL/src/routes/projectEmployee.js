module.exports = app => {
    const ProjectEmployee = app.db.models.ProjectEmployee;

    app.route('/projectEmployee')
        .get((req, res) => {
            ProjectEmployee.findAll({})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })

    app.post('/projectEmployee', (req, res) => {
        ProjectEmployee.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({ msg: error.message });
            });

    });

    app.route('/projectEmployee/:projectId')
        .get((req, res) => {
            ProjectEmployee.findAll({ where: req.params })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })

    app.route('/projectEmployee/:employeeId')
    .delete((req, res) => {
        ProjectEmployee.destroy({ where: req.params })
            .then(result => res.sendStatus(204))
            .catch(error => {
                res.status(412).json({ msg: error.message });
            });
    });



};