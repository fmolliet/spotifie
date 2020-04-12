
exports.up = function(knex) {
    return knex.schema.createTable('singles', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('album').notNullable();
        table.integer('duration').nullable();
        table.integer('size').notNullable();
        
        table.timestamps(true, true);
        
        table.string('originalname').notNullable();
        table.string('filename').notNullable();
        table.string('destination').notNullable();
        table.string('path').notNullable();
        
        table.string('artist_id').notNullable();
        table.foreign('artist_id').references('id').inTable('artists');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('singles');
};
