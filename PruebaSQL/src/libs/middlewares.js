import express from 'express';

module.exports = app => {

  // Settings
  app.set('port', process.env.PORT || 4000);

  // middlewares
  app.use(express.json());
  app.use((req, res, next) => {
    // delete req.body.id;
    next();
  });

};