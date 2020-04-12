
exports.up = function(knex) {
    return knex.schema.createTable('playlists',(table)=>{
        table.increments();
        table.string('name').notNullable();
        table.text('description').nullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        
        table.string('user_id').notNullable();
        table.foreign('user_id').references('id').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('playlists');
};
