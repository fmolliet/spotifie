const fs = require('fs');
const getStat = require('util').promisify(fs.stat);

const { getLastSong } = require('../services/ListenServices');

// 10 * 1024 * 1024 // 10MB
// usamos um buffer minúsculo! O padrão é 64k
const highWaterMark =  20;


module.exports = {
    async get( req, res){
        const song = await getLastSong( req );
        
        let filePath = './' + song.destination + song.filename ;
        const stat = await getStat(filePath);
        //console.log(stat);
        //return res.json(stat);
        
        res.writeHead(200, {
            'Content-Type': 'audio/ogg',
            'Content-Length': stat.size/30
        });
        
        
        const stream = fs.createReadStream(filePath);
        // Caso queria mostrar mensagem no console assim que acabar o audio
        //stream.on('end', () => console.log('acabou'));

        // faz streaming do audio 
        stream.pipe(res);
    }
};