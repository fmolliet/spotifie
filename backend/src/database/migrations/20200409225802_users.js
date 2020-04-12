
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('role').notNullable().defaultTo('admin');
        table.boolean ('premium').notNullable().defaultTo(false);

        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
