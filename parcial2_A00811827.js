// Paquete  para conectar a BD MySQL.
var mysql = require('mysql');
// Consulta SQL.
var sql = 'SELECT * FROM Alumnos LIMIT 10';

// Parámetros de conexión a la base de datos.
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "AppWeb2022",
  database : 'parcial2_A00811827'
});


// comprobar la conexión y devolución de resultados de la base de datos.
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) { //con.query("SELECT * FROM Alumnos" en lugar de solo poner sql y declararla arriba para consultar)
    if (err) throw err;
    
    for(i=0; i<result.length; i++){
    	console.log("Result: " + result[i].Nombre);//console.log(result)
    }

  });
});

////realizar update
con.query("UPDATE Alumnos SET Nombre = 'BORRAR ALUMNO' WHERE Id = 2", function (err, result, fields) { 
  if (err) throw err;
    
    for(i=0; i<result.length; i++){
    	console.log("Result: " + result[i].Nombre);//console.log(result)
    }

  });

///realizar delete
con.query("DELETE FROM Alumnos WHERE Id = 2", function (err, result, fields) { 
  if (err) throw err;
  
  for(i=0; i<result.length; i++){
    console.log("Result: " + result[i].Nombre);//console.log(result)
  }

});

//realizar insert
con.query("INSERT INTO Alumnos(Nombre, Identificador, Email, Carrera) VALUES ('Nayely Portillo', 'A00811827','naye@gmail.com','ISD') ", function (err, result, fields) { 
  if (err) throw err;
  
  for(i=0; i<result.length; i++){
    console.log("Result: " + result[i].Nombre + Identificador);//console.log(result)
 }
 
});
connection.end();



