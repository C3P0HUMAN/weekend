exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dogs_table').del()
    .then(function() {
      // Inserts seed entries
      return knex('dogs_table').insert([{
          dog_breed: "English Bulldog",
          dog_name: "Merlin",
          dog_weight: 50,

        },
        {
          dog_breed: "Pug",
          dog_name: "Noodle",
          dog_weight: 10,

        },
        {
          dog_breed: "Great Dane",
          dog_name: "Duke",
          dog_weight: 100,

        },
        {
          dog_breed: "German Shepard",
          dog_name: "Max",
          dog_weight: 65,

        },
        {
          dog_breed: "Pitbull",
          dog_name: "tyson",
          dog_weight: 70,
        
        },

      ]);
    });
};
