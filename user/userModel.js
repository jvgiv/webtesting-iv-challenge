const db = require('../data/dbConfig.js')

module.exports = {
    insert, 
    remove
}


async function insert(user) {
    const ids = await db('hobbits').insert(user);

    return db('user').where({ id }).first();
}

function remove(id) {

    
}