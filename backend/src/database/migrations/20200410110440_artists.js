
exports.up = function(knex) {
    return knex.schema.createTable('artists',(table)=>{
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.text('biografy').nullable();
        
        table.integer('listeners').nullable().defaultTo(0);
        table.integer('followers').nullable().defaultTo(0);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('artists');
};
