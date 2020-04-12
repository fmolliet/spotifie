const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = { 
    async index(req, res){
        const singles = await connection('singles')
            .join('artists', 'artists.id', '=', 'singles.artist_id')
            .select(['singles.*', 'artists.name as nome' ]);
        return res.json(singles);
    },
    
    async store(req, res){
        const artist_id = req.headers.authorization; 
        
        const { name, album } = req.body; 
        const { filename, originalname, size , destination, path } = req.file;
        const id = crypto.randomBytes(4).toString('HEX');
        
        //console.log(id);
        try {
           
            await connection('singles').insert({
                id,
                name,
                album,
                size,
                originalname,
                filename,
                destination,
                path,
                artist_id
            });
            return res.json({id});
        }catch(err) {
            res.status(400).json(err);
        }
    },
    
    async delete(req, res ){
        const { id } = req.params;
        const artist_id = req.headers.authorization; 
        
        try {
            const rs = await connection('singles').where({id,artist_id}).delete();
            return res.json({rs});
        }catch(err) {
            res.status(400).json(err);
        }
    }
};