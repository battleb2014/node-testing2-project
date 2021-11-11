const db = require('../../data/db-config');

module.exports = {
    findAll,
    findById,
    create
}

function findAll() {
    return db('hogwarts-staff');
}
function findById(id) {
    return db('hogwarts-staff').where('staff_id', id);
}
function create(staff) {
    return db('hogwarts-staff').insert(staff)
        .then(([id]) => {
            return findById(id)
        })
}