const db = require('../database/dbConfig');

module.exports = {
    add,
    find,
    findById
}

function find() {
    return db('users')
}

function findById(id) {
    return db('users').where({ id }).first()
}

function add(user) {
    return db('users').insert(user)
}