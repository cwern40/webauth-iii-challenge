const db = require('../database/dbConfig');

module.exports = {
    add,
    find,
    findById, 
    findBy
}

function find() {
    return db('users')
}

function findById(id) {
    return db('users').where({ id }).first()
}

function findBy(filter) {
    return db('users').where(filter)
}

function add(user) {
    return db('users').insert(user)
    // .then(newUser => {
    //     return findById(newUser.id).then(task => {
    //         return task;
    //     })
    // })
}