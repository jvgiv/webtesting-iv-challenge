
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, name: 'Joe', info: 'interesting stuff'},
        {id: 2, name: 'John', info: 'interesting stuff'},
        {id: 3, name: 'Jim', info: 'interesting stuff'}
      ]);
    });
};
