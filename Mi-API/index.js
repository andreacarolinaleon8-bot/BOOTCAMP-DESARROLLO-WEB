const express = require('express');
const morgan = require( 'morgan');

const app = express();

app.set( 'port', 3000);

app.use(express.json());
app.use(morgan( 'dev' ));

app.use(require('./routes/index.routes'));

app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto 3000');
});