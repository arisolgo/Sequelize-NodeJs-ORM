module.exports = {
    database: 'Project',
    username: '',
    password: '',
    params: {
        dialect: 'sqlite',
        storage: 'project-db.sqlite',
        define: {
            underscore: true,
            freezeTableName: true
        },
        operatorAliases: false

    }
}