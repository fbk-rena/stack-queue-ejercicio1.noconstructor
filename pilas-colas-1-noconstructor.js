var nombres = ["Amalia", "Nallely", "Rena", "Macky", "Nohemi"];
var apellidos = ["Rivera", "House", "Martinez", "Solorzano", "Guzman"];

var nombre = [];
while(nombres != 0){
  nombre.push(nombres.pop().concat(apellidos.pop()));
  
}

console.log(nombre);