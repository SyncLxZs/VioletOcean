module.exports = client => {
        process.on('unhandledRejection', (reason, p ) => {
            console.log('⛔ Um erro aconteceu logs enviadas para o Discord!');
            console.log(reason, p);
        });

        process.on('uncaughtException', (err, origin) => {
            console.log('⛔ Um erro aconteceu logs enviadas para o Discord!');
            console.log(err, origin);
     }) 

        process.on('uncaughtExceptionMonitor', (err, origin) => {
            console.log('⛔ Um erro aconteceu logs enviadas para o Discord!');
            console.log(err, origin);
     });

        process.on('multipleResolves', (type, promise, reason) => {
          //console.log('⛔ Um erro aconteceu logs enviadas para o Discord!');
          //console.log(type, promise, reason);
     });
}