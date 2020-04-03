import express from 'express';

module.exports = function(app) {
    // Settings 
    app.set('port', process.env.PORT || 3000);

    //middleware
    app.use(express.json());
};