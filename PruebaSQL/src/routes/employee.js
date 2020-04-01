module.exports = app => {
    const Employee = app.db.models.Task;


    app.get('/projecto/:id', (req, res) => {

        Project.findById(req.params.id, {
                attributes: ['id', 'firstName', 'lastName', 'salary']
            })
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({ msg: error.message });
            });
    })
    app.post('/project', (req, res) => {
        Project.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({ msg: error.message });
            });
    })

    app.put('/project:id', (req, res) => {
            Project.update(req.body, { where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });

        })
        .delete('project:id', (req, res) => {
            Project.destroy({ where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        });



};