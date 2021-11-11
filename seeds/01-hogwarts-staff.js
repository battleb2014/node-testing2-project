
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hogwarts-staff').del()
    .then(function () {
      // Inserts seed entries
      return knex('hogwarts-staff').insert([
        {staff_id: 1, name: 'Albus Dumbledore', role: 'Headmaster', subject: 'Transfiguration'},
        {staff_id: 2, name: 'Alastor "Mad-Eye" Moody', role: 'Professor', subject: 'Defence Against the Dark Arts'},
        {staff_id: 3, name: 'Argus Filch', role: 'Caretaker', subject: null},
        {staff_id: 4, name: 'Aurora Sinistra', role: 'Professor', subject: 'Astronomy'},
        {staff_id: 5, name: 'Horace Slughorn', role: 'Professor', subject: 'Potions'},
        {staff_id: 6, name: 'Rubeus Hagrid', role: 'Professor', subject: 'Care of Magical Creatures / Grounds Keeper'}
      ]);
    });
};
