
/* module.exports = app => {

    app.db.sequelize.sync().done(() => {
      app.listen(app.get('port'), () => {
        console.log('Server on port', app.get('port'));
      });
    });
  
  };
*/


module.exports = app => {
    app.listen(app.get('port'), () => {
        console.log('server on port', app.get('port'));
    });
};