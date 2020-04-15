exports.up = function(knex) {
    return knex.schema
        .createTable('animal', function (table) {
            table.string('id', 255);
            table.string('first_name', 255);
            //table.string(); // te dije te falta una columna el nombre esto asi no va, quitalo no dejes codigo basura
            table.string('year');
            table.boolean('deleted');
            table.timestamp('createdAt');
            table.timestamp('updatedAt');
            table.timestamp('deletedAt');
            table.integer('__v');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('products');
};
