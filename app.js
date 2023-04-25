
const http = require('http');


const server = http.createServer((req, res) => {
  console.log("se a recibido una peticion");
  res.end("La conexion se a establecido correctamente y se finalizo la transferencia de datos");
});

server.listen(3000, () => {
  console.log("el servidor esta escuchando/esperando peticiones en el puerto 3000")
})
