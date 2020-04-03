"use strict";

module.exports = function (app) {
  app.listen(app.get('port'), function () {
    console.log('server on port', app.get('port'));
  });
};