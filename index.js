const http = require('http');

//Función flecha, se crea el servidor y recibe dos parámetros.
const server = http.createServer((request, response)=>{
        //Se agrega la propiedad status a response
        response.status = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end('Hello Universe');
});

//Se le agrega la propiedad listen a la constante server.
server.listen(3000, ()=>{
    console.log('Server on port 3000');
});