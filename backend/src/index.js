require('./database');
const app = require('./app'); //constate de app.js para iniciar el servidor


app.listen(app.get('port')); //escuchar en el puerto del servidor
console.log('Server on port',app.get('port'));