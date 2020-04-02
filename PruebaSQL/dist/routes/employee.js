"use strict";

module.exports = function (app) {
  var Employee = app.db.models.Task;
  app.get('/projecto/:id', function (req, res) {
    Project.findById(req.params.id, {
      attributes: ['id', 'firstName', 'lastName', 'salary']
    }).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
  app.post('/project', function (req, res) {
    Project.create(req.body).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
  app.put('/project:id', function (req, res) {
    Project.update(req.body, {
      where: req.params
    }).then(function (result) {
      return res.sendStatus(204);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  })["delete"]('project:id', function (req, res) {
    Project.destroy({
      where: req.params
    }).then(function (result) {
      return res.sendStatus(204);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
};