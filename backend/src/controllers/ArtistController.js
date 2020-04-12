const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {
    async index( req, res ){
        const artists =  await connection('artists').select('*');
        return res.json(artists);
    },
    
    async store( req, res ){
        
        const {  name, email, biografy } = req.body;
            
        //console.log(nome);
        try {
            
            const artist = await connection('artists').where('email', email).select('id').first();
            
            const id = crypto.randomBytes(4).toString('HEX');
                
            //console.log(artist);
            
            if(!artist){
                
                
                await connection('artists').insert({
                    id,
                    name,
                    email,
                    biografy,
                    listeners: 0,
                    followers: 0
                });
                return res.json({id});
            } else
                return res.json({id: artist.id});
            
            
            
        } catch ( err ){
            return res.json(err).status(400);
        }
    }
};