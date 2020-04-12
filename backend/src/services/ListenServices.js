const connection = require('../database/connection');

class ListenServices{
    async getLastSong( req ){
        const { id } = req.query;
        
        try {
            if(!id){
                const single = await connection('singles').limit(1).select('*').first();
                return single;
            }else{
                const single = await connection('singles').where('id', id).select('*').first();
                return single;
            }
        }
        catch(err){
            return err;
        }
        
    }
    
}

module.exports = new ListenServices();